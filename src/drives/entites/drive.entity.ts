import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredNumber,
  requiredString,
  unRequiredBoolean,
  unRequiredNumber,
} from 'src/util/options/mongoose-options';

export type DriveDocument = HydratedDocument<Drive>;

@Schema()
export class Drive {
  @Prop(requiredNumber)
  writeSpeed: number;

  @Prop(requiredNumber)
  readSpeed: number;

  @Prop(requiredString)
  type: string;

  @Prop(unRequiredNumber)
  rpm: number;

  @Prop(unRequiredBoolean)
  nvme: boolean;
}

export const DriveSchema = SchemaFactory.createForClass(Drive);
