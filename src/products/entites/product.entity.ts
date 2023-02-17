import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {
  requiredArrayOfString,
  requiredBoolean,
  requiredNumber,
  requiredString,
  unRequiredNumber,
} from 'src/util/options/mongoose-options';
import { locationProps, sellerId } from './mongoose-options';

interface Location {
  state: string;
  moreInfo?: string;
}

@Schema()
export class Product {
  @Prop(requiredArrayOfString)
  imgsList: string[];

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
  weight: number;

  @Prop(requiredNumber)
  quantity: number;

  @Prop(sellerId)
  sellerId: Types.ObjectId;

  @Prop(locationProps)
  location: Location;
}
