import { Type } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { CompCaseDto } from './desktop.nested-dtos/comp-case.dto';
import { CoolerDto } from './desktop.nested-dtos/cooler.dto';
import { PowerSupplyDto } from './desktop.nested-dtos/powersupply.dto';

export class DesktopDto {
  @ValidateNested()
  @Type(() => PowerSupplyDto)
  @IsObject()
  powerSupply: PowerSupplyDto;

  @ValidateNested()
  @Type(() => CompCaseDto)
  @IsObject()
  @IsOptional()
  compCase?: CompCaseDto;

  @ValidateNested()
  @Type(() => CoolerDto)
  @IsObject()
  @IsOptional()
  cooler?: CoolerDto;
}
