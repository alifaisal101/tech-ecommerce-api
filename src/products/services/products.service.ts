import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isMongoId, isNotEmptyObject } from 'class-validator';
import { randomBytes } from 'crypto';
import { writeFile } from 'fs/promises';
import mongoose, { Model, PipelineStage, Types } from 'mongoose';
import { join } from 'path';
import { ComputersDto } from 'src/computers/dtos/computers.dto';
import { ComputersService } from 'src/computers/services/computers.service';
import { DisplaysDto } from 'src/displays/dtos/displays.dto';
import { DisplaysService } from 'src/displays/services/displays.service';
import { DrivesDto } from 'src/drives/dtos/drives.dto';
import { DrivesService } from 'src/drives/services/drives.service';
import { UserDocument } from 'src/users/entities/users.entity';
import {
  deleteObjProp,
  objKeysValidator,
} from 'src/util/helpers/objects.helper';
import { CreateDto } from '../dtos/req/create.dto';
import { Product, ProductDocument } from '../entites/product.entity';

const imagesPath = join(__dirname, '../../../../data', 'products-images');
type productCategory = DisplaysDto | DrivesDto | ComputersDto | undefined;

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private readonly computersSrv: ComputersService,
    private readonly displaysSrv: DisplaysService,
    private readonly drivesSrv: DrivesService,
  ) {}

  async create(product: CreateDto, userId: Types.ObjectId) {
    // Checks if product contains more then one categrory, ex: contains computer and display at the same time
    const categoryKeys = ['computer', 'drive', 'display'];

    const invalidObject =
      objKeysValidator(product, categoryKeys).length > 1 || false;
    if (invalidObject) {
      throw new BadRequestException('Only one category should be included');
    }

    const [leanProduct, categoryName, category] = deleteObjProp(
      product,
      categoryKeys,
    ) as [Product, string | undefined, productCategory];

    const categoryId = {};

    try {
      if (isNotEmptyObject(category)) {
        switch (categoryName) {
          case 'computer':
            const computer = await this.computersSrv.create(
              category as ComputersDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            categoryId[`${categoryName}Id`] = computer?._doc._id;
            break;
          case 'display':
            const display = await this.displaysSrv.create(
              category as DisplaysDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            categoryId[`${categoryName}Id`] = display?._doc._id;
            break;
          case 'drive':
            const drive = await this.drivesSrv.create(category as DrivesDto);

            // eslint-disable-next-line
            //@ts-ignore
            categoryId[`${categoryName}Id`] = drive?._doc._id;
            break;
        }
      }
      const result = await this.productModel.create({
        ...leanProduct,
        sellerId: userId,
        ...categoryId,
      });

      // eslint-disable-next-line
      //@ts-ignore
      return result._doc;
    } catch (err) {
      return new InternalServerErrorException();
    }
  }

  findById(id: Types.ObjectId) {
    return this.productModel.findById(id);
  }

  async uploadImages(
    productId: Types.ObjectId,
    images: Array<Express.Multer.File>,
    user: Partial<UserDocument>,
  ) {
    const product = (await this.findById(productId)) || false;
    if (!product) {
      throw new NotFoundException('No product with that id was found');
    }

    const userOwnsProduct = product.sellerId.equals(user._id) || false;
    if (!userOwnsProduct) {
      throw new BadRequestException();
    }

    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      const imageFileExt = image.mimetype.split('/')[1];
      const newImageFileName = `${randomBytes(12).toString(
        'hex',
      )}.${imageFileExt}`;

      try {
        await writeFile(join(imagesPath, newImageFileName), image.buffer);
        product.imgsList.push(newImageFileName);
      } catch (err) {
        throw new InternalServerErrorException();
      }
    }

    // eslint-disable-next-line
    //@ts-ignore
    return product.save();
  }

  findOne(id_str: string) {
    if (!isMongoId(id_str)) {
      throw new BadRequestException();
    }
    const id = new mongoose.Types.ObjectId(id_str);
    return this.productModel.aggregate([
      { $match: { _id: { $eq: id } } },
      {
        $lookup: {
          from: 'users',
          localField: 'sellerId',
          foreignField: '_id',
          as: 'seller',
        },
      },
      {
        $project: {
          sellerId: 0,
          seller: { email: 0, password: 0, privileges: 0 },
        },
      },
      {
        $lookup: {
          from: 'drives',
          localField: 'driveId',
          foreignField: '_id',
          as: 'drive',
        },
      },
      {
        $lookup: {
          from: 'computers',
          localField: 'computerId',
          foreignField: '_id',
          as: 'computer',
        },
      },
      {
        $lookup: {
          from: 'desktops',
          localField: 'computer.desktopId',
          foreignField: '_id',
          as: 'desktop',
        },
      },
      {
        $lookup: {
          from: 'laptops',
          localField: 'computer.laptopId',
          foreignField: '_id',
          as: 'laptop',
        },
      },
      {
        $lookup: {
          from: 'allinones',
          localField: 'computer.allInOneId',
          foreignField: '_id',
          as: 'allInOne',
        },
      },
      {
        $lookup: {
          from: 'displays',
          localField: 'displayId',
          foreignField: '_id',
          as: 'display',
        },
      },
      {
        $lookup: {
          from: 'monitors',
          localField: 'display.monitorId',
          foreignField: '_id',
          as: 'monitor',
        },
      },
      {
        $lookup: {
          from: 'projectors',
          localField: 'display.projectorId',
          foreignField: '_id',
          as: 'projector',
        },
      },
      {
        $lookup: {
          from: 'tvs',
          localField: 'display.tvId',
          foreignField: '_id',
          as: 'tv',
        },
      },
    ]);
  }
  find(pipelineStages: PipelineStage[]) {
    return this.productModel.aggregate(pipelineStages);
  }
}
