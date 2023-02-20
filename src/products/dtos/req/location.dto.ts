import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LocationDto {
  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  moreinfo?: string;
}
