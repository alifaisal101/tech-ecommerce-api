import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectorDto {
  @IsString()
  @IsNotEmpty()
  brightness: string;

  @IsString()
  @IsNotEmpty()
  lightSrcMaxHours: string;

  @IsString()
  @IsNotEmpty()
  lensThrowType: string;

  @IsString()
  @IsNotEmpty()
  nativeRes: string;

  @IsString()
  @IsNotEmpty()
  aspectRatio: string;

  @IsString()
  @IsNotEmpty()
  lightSource: string;
}
