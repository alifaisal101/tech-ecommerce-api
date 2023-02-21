import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ComputersDto } from 'src/computers/dtos/computers.dto';
import { ComputersService } from 'src/computers/services/computers.service';
import { DisplaysDto } from 'src/displays/dtos/displays.dto';
import { DisplaysService } from 'src/displays/services/displays.service';
import { DrivesDto } from 'src/drives/dtos/drives.dto';
import { DrivesService } from 'src/drives/services/drives.service';
import {
  deleteObjProp,
  objKeysValidator,
} from 'src/util/helpers/objects.helper';
import { CreateDto } from '../dtos/req/create.dto';
import { Product, ProductDocument } from '../entites/product.entity';

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
      switch (categoryName) {
        case 'computer':
          const computer = await this.computersSrv.create(
            category as ComputersDto,
          );

          // eslint-disable-next-line
          //@ts-ignore
          categoryId[`${category}Id`] = computer._doc._id;
          break;
        case 'drive':
          const display = await this.displaysSrv.create(
            category as DisplaysDto,
          );

          // eslint-disable-next-line
          //@ts-ignore
          categoryId[`${category}Id`] = display._doc._id;
          break;
        case 'display':
          const drive = await this.drivesSrv.create(category as DrivesDto);

          // eslint-disable-next-line
          //@ts-ignore
          categoryId[`${category}Id`] = drive._doc._id;
          break;
      }

      console.log(
        await this.productModel.create({ ...leanProduct, ...categoryId }),
      );
    } catch (err) {
      console.log(err);
    }
    // strip out 'computer', 'drive', 'display'
    // add 'computer', 'drive', 'display' to the db and get back the id
    const gategory = {};
    // create the product object and store in the db
    // const productobj: Product = {
    //   ...product,
    //   sellerId: userId,
    //   ...gategory,
    // };
  }
}
