import { IsBoolean } from 'class-validator';

export class AllInOneDto {
  @IsBoolean()
  mouse: boolean;

  @IsBoolean()
  keyboard: boolean;
}
