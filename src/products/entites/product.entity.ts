import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Location } from '../../declarations/products';
import {
  requiredBoolean,
  requiredNumber,
  requiredString,
  unRequiredArrayOfStrings,
  unRequiredNumber,
} from '../../util/options/mongoose-options';
import {
  computerId,
  displayId,
  driveId,
  locationProps,
  sellerId,
} from './options/product.options';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop(unRequiredArrayOfStrings)
  imgsList?: string[];

  @Prop(requiredString)
  maker: string;

  @Prop(requiredString)
  title: string;

  @Prop(requiredString)
  desc: string;

  @Prop(requiredBoolean)
  approvalState: boolean;

  @Prop(requiredString)
  model: string;

  // Product Weight in Kilos
  @Prop(unRequiredNumber)
  weight?: number;

  @Prop(requiredNumber)
  quantity: number;

  @Prop(sellerId)
  sellerId: Types.ObjectId;

  @Prop(locationProps)
  location: Location;

  @Prop(computerId)
  computerId?: Types.ObjectId;

  @Prop(driveId)
  driveId?: Types.ObjectId;

  @Prop(displayId)
  displayId?: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
