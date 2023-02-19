import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Cpu, Gpu, Ram, Storage } from 'src/declarations/computer';
import {
  allInOneId,
  cpu,
  desktopId,
  gpu,
  laptopId,
  ram,
  storages,
} from './options/computer.options';

export type ComputerDocument = HydratedDocument<Computer>;

@Schema()
export class Computer {
  @Prop(desktopId)
  desktopId?: Types.ObjectId;

  @Prop(laptopId)
  laptopId?: Types.ObjectId;

  @Prop(allInOneId)
  allInOneId?: Types.ObjectId;

  @Prop(ram)
  ram: Ram;

  @Prop(storages)
  storages: Storage[];

  @Prop(cpu)
  cpu: Cpu;

  @Prop(gpu)
  gpu: Gpu;
}

export const ComputerSchema = SchemaFactory.createForClass(Computer);
