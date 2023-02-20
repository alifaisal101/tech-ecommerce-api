import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class DrivesDto {
  @IsNumber()
  @IsPositive()
  writeSpeed: number;

  @IsNumber()
  @IsPositive()
  readSpeed: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  rpm?: number;

  @IsBoolean()
  @IsOptional()
  nvme?: boolean;
}
