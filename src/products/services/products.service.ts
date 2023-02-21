import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ComputersDto } from 'src/computers/dtos/computers.dto';
import { DisplaysDto } from 'src/displays/dtos/displays.dto';
import { DrivesDto } from 'src/drives/dtos/drives.dto';
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
  ) {}

  create(product: CreateDto, userId: Types.ObjectId) {
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

    console.log(leanProduct, categoryName, category);
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
