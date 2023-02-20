import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CpuDto {
  @IsString()
  @IsNotEmpty()
  maker: string;
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  speed?: string;

  @IsPositive()
  @IsNumber()
  cores: number;
}
