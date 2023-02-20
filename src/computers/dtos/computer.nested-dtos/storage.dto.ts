import { IsNotEmpty, IsString } from 'class-validator';

export class StorageDto {
  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  maker: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
