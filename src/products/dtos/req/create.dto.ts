import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ComputersDto } from 'src/computers/dtos/computers.dto';
import { DisplaysDto } from 'src/displays/dtos/displays.dto';
import { DrivesDto } from 'src/drives/dtos/drives.dto';
import { LocationDto } from './location.dto';

export class CreateDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  maker: string;

  @MaxLength(200)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MaxLength(4000)
  @IsString()
  @IsNotEmpty()
  desc: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  model: string;

  @Max(1000)
  @Min(0.01)
  @IsNumber()
  @IsOptional()
  weight?: number;

  @Max(1000)
  @Min(1)
  @IsNumber()
  quantity: number;

  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;

  @ValidateNested()
  @Type(() => ComputersDto)
  @IsOptional()
  computer?: ComputersDto;

  @ValidateNested()
  @Type(() => DrivesDto)
  @IsOptional()
  drive?: DrivesDto;

  @ValidateNested()
  @Type(() => DisplaysDto)
  @IsOptional()
  display?: DisplaysDto;
}
