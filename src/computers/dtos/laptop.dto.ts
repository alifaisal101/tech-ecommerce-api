import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { BattaryDto } from './laptop.nested-dtos/battary.dto';

export class LaptopDto {
  @IsNumber()
  @IsPositive()
  screenSize: number;

  @IsBoolean()
  touch: boolean;

  @IsBoolean()
  realWindows: boolean;

  @IsBoolean()
  twoInOne: boolean;

  @IsBoolean()
  pen: boolean;

  @ValidateNested()
  @Type(() => BattaryDto)
  @IsObject()
  battary: BattaryDto;
}
