import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Battary } from 'src/declarations/computer';
import {
  requiredBoolean,
  requiredNumber,
} from 'src/util/options/mongoose-options';
import { battary } from './options/laptop.options';

export type LaptopDocument = HydratedDocument<Laptop>;

@Schema()
export class Laptop {
  // Laptop screen size in inches
  @Prop(requiredNumber)
  screenSize: number;

  @Prop(requiredBoolean)
  touch: boolean;

  // Whether the laptop comes with an activated windows
  @Prop(requiredBoolean)
  realWindows: boolean;

  // Whether the laptop is 360 screen
  @Prop(requiredBoolean)
  twoInOne: boolean;

  // Whether the laptop comes with a pen
  @Prop(requiredBoolean)
  pen: boolean;

  @Prop(battary)
  battary: Battary;
}

export const LaptopSchema = SchemaFactory.createForClass(Laptop);
