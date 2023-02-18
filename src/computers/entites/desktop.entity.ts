import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CompCase, Cooler, PowerSupply } from 'src/declarations/computer';
import { compCase, cooler, powerSupply } from './options/desktop.options';

export type DesktopDocument = HydratedDocument<Desktop>;

@Schema()
export class Desktop {
  @Prop(powerSupply)
  powerSupply: PowerSupply;

  @Prop(compCase)
  compCase: CompCase;

  @Prop(cooler)
  cooler: Cooler;
}

export const DesktopSchema = SchemaFactory.createForClass(Desktop);
