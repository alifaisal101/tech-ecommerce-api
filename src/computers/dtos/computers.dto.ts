import { Type } from 'class-transformer';
import { IsArray, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { AllInOne } from './allInOne.dto';
import { Cpu } from './computer.nested-dtos/cpu.dto';
import { Gpu } from './computer.nested-dtos/gpu.dto';
import { Ram } from './computer.nested-dtos/ram.dtos';
import { Storage } from './computer.nested-dtos/storage.dto';
import { Desktop } from './desktop.dto';
import { Laptop } from './laptop.dto';

export class ComputersDto {
  @ValidateNested()
  @Type(() => Cpu)
  @IsObject()
  cpu: Cpu;

  @ValidateNested()
  @Type(() => Ram)
  @IsObject()
  ram: Ram;

  @ValidateNested()
  @IsArray()
  @Type(() => Storage)
  storages: Storage[];

  @ValidateNested()
  @Type(() => Gpu)
  @IsObject()
  gpu: Gpu;

  @ValidateNested()
  @Type(() => AllInOne)
  @IsObject()
  @IsOptional()
  allInOne: AllInOne;

  @ValidateNested()
  @Type(() => Desktop)
  @IsObject()
  @IsOptional()
  desktop: Desktop;

  @ValidateNested()
  @Type(() => Laptop)
  @IsObject()
  @IsOptional()
  laptop: Laptop;
}
