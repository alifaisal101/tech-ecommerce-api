import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Location } from 'src/declarations/products';
import { IsValidObject } from 'src/decorators/validation.decorator';

export class CreateDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  maker: string;

  @MaxLength(200)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MaxLength(4000)
  @IsString()
  @IsNotEmpty()
  desc: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  model: string;

  @Max(1000)
  @Min(0.01)
  @IsNumber()
  @IsOptional()
  weight?: number;

  @Max(1000)
  @Min(1)
  @IsNumber()
  quantity: number;

  @IsValidObject(
    { state: 'string', moreinfo_: 'string' },
    {
      message:
        'Location must be an object with a state and optionally moreinfo',
    },
  )
  location: Location;
}
