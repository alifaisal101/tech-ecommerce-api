import { Type } from 'class-transformer';
import { IsArray, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { AllInOneDto } from './allInOne.dto';
import { CpuDto } from './computer.nested-dtos/cpu.dto';
import { GpuDto } from './computer.nested-dtos/gpu.dto';
import { RamDto } from './computer.nested-dtos/ram.dtos';
import { StorageDto } from './computer.nested-dtos/storage.dto';
import { DesktopDto } from './desktop.dto';
import { LaptopDto } from './laptop.dto';

export class ComputersDto {
  @ValidateNested()
  @Type(() => CpuDto)
  @IsObject()
  cpu: CpuDto;

  @ValidateNested()
  @Type(() => RamDto)
  @IsObject()
  ram: RamDto;

  @ValidateNested()
  @IsArray()
  @Type(() => StorageDto)
  storages: StorageDto[];

  @ValidateNested()
  @Type(() => GpuDto)
  @IsObject()
  gpu: GpuDto;

  @ValidateNested()
  @Type(() => AllInOneDto)
  @IsObject()
  @IsOptional()
  allInOne?: AllInOneDto;

  @ValidateNested()
  @Type(() => DesktopDto)
  @IsObject()
  @IsOptional()
  desktop?: DesktopDto;

  @ValidateNested()
  @Type(() => LaptopDto)
  @IsObject()
  @IsOptional()
  laptop?: LaptopDto;
}
