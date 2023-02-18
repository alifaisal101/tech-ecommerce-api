import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredBoolean,
  requiredString,
} from 'src/util/options/mongoose-options';

export type TvDocument = HydratedDocument<Tv>;

@Schema()
export class Tv {
  @Prop(requiredString)
  tvType: string;

  @Prop(requiredBoolean)
  curved: boolean;
}

export const TvSchema = SchemaFactory.createForClass(Tv);
