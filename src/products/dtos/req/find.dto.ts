import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class FindDto {
  @MaxLength(200)
  @IsString()
  @IsOptional()
  title?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  page?: number;
}
