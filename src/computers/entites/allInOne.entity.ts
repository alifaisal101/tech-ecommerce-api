import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { requiredBoolean } from 'src/util/options/mongoose-options';

export type AllInOneDocument = HydratedDocument<AllInOne>;

@Schema()
export class AllInOne {
  @Prop(requiredBoolean)
  mouse: boolean;

  @Prop(requiredBoolean)
  keyboard: boolean;
}

export const AllInOneSchema = SchemaFactory.createForClass(AllInOne);
