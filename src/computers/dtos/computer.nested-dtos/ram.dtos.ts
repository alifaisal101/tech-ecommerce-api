import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class RamDto {
  @IsPositive()
  @IsNumber()
  size: number;

  @IsPositive()
  @IsNumber()
  @IsOptional()
  speed?: number;

  @IsString()
  @IsNotEmpty()
  ddrType: string;
}
