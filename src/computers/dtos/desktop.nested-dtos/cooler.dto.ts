import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CoolerDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  maker?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  type?: string;
}
