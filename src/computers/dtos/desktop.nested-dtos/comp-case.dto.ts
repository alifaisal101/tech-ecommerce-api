import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CompCaseDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  tower?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  maker?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  model?: string;
}
