import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class TvDto {
  @IsString()
  @IsNotEmpty()
  tvType: string;

  @IsBoolean()
  curved: boolean;
}
