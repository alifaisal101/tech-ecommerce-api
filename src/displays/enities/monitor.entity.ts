import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredBoolean,
  requiredNumber,
  requiredString,
} from 'src/util/options/mongoose-options';

export type MonitorDocument = HydratedDocument<Monitor>;

@Schema()
export class Monitor {
  @Prop(requiredNumber)
  refreshRate: number;

  @Prop(requiredNumber)
  responseTime: number;

  @Prop(requiredString)
  sync: string;

  @Prop(requiredString)
  displayType: string;

  @Prop(requiredBoolean)
  curved: boolean;

  @Prop(requiredString)
  speakers: string;
}

export const MonitorSchema = SchemaFactory.createForClass(Monitor);
