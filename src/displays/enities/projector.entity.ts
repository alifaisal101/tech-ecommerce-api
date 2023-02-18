import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { requiredString } from 'src/util/options/mongoose-options';

export type ProjectorDocument = HydratedDocument<Projector>;

@Schema()
export class Projector {
  @Prop(requiredString)
  brightness: string;

  @Prop(requiredString)
  lightSrcMaxHours: string;

  @Prop(requiredString)
  lensThrowType: string;

  @Prop(requiredString)
  nativeRes: string;

  @Prop(requiredString)
  aspectRatio: string;

  @Prop(requiredString)
  lightSource: string;
}

export const ProjectorSchema = SchemaFactory.createForClass(Projector);
