import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class GpuDto {
  @IsString()
  @IsNotEmpty()
  maker: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsPositive()
  @IsNumber()
  vram: number;
}
