import { IsNumber, IsPositive } from 'class-validator';

export class BattaryDto {
  @IsNumber()
  @IsPositive()
  size: number;

  @IsNumber()
  @IsPositive()
  time: number;
}
