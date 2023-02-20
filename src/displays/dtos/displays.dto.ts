import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MonitorDto } from './monitor.dto';
import { ProjectorDto } from './projector.dto';
import { TvDto } from './tv.dto';

export class DisplaysDto {
  @IsString()
  @IsNotEmpty()
  resolution: string;

  @IsPositive()
  @IsNumber()
  size: number;

  @IsString()
  @IsNotEmpty()
  ports: string;

  @ValidateNested()
  @Type(() => ProjectorDto)
  @IsOptional()
  projector?: ProjectorDto;

  @ValidateNested()
  @Type(() => MonitorDto)
  @IsOptional()
  Monitor?: MonitorDto;

  @ValidateNested()
  @Type(() => TvDto)
  @IsOptional()
  Tv?: TvDto;
}
