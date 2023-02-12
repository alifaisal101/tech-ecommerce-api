import {
  IsAlpha,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class RegisterDto {
  @IsBoolean()
  isCompany: boolean;

  // Only validate the first name & the last name if the user is not a company
  @ValidateIf((body) => !body.isCompany)
  @IsAlpha()
  @IsNotEmpty()
  fname: string;

  @ValidateIf((body) => !body.isCompany)
  @IsAlpha()
  @IsNotEmpty()
  lname: string;

  // Only validaite if the user is a company
  @ValidateIf((body) => body.isCompany)
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cPassword: string;
}
