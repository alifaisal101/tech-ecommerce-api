import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class MonitorDto {
  @IsPositive()
  @IsNumber()
  refreshRate: number;

  @IsPositive()
  @IsNumber()
  responceTimer: number;

  @IsString()
  @IsNotEmpty()
  sync: string;

  @IsString()
  @IsNotEmpty()
  displayType: string;

  @IsBoolean()
  curved: boolean;

  @IsString()
  @IsNotEmpty()
  speakers: string;
}
