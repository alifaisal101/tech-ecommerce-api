import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  requiredNumber,
  requiredString,
} from 'src/util/options/mongoose-options';
import { monitorId, projectorId, tvId } from './options/display.options';

export type DisplayDocument = HydratedDocument<Display>;

@Schema()
export class Display {
  @Prop(requiredString)
  resolution: string;

  //display size in inches
  @Prop(requiredNumber)
  size: number;

  @Prop(requiredString)
  ports: string;

  @Prop(projectorId)
  projectorId?: Types.ObjectId;

  @Prop(monitorId)
  monitorId?: Types.ObjectId;

  @Prop(tvId)
  tvId?: Types.ObjectId;
}

export const DisplaySchema = SchemaFactory.createForClass(Display);
