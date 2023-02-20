import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class PowerSupplyDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  maker?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  modularity?: string;

  @IsNumber()
  @IsPositive()
  wattage: number;
}
