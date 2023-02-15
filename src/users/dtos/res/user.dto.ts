import { Expose } from 'class-transformer';
import { Types } from 'mongoose';

export class UserDto {
  @Expose()
  isCompany: boolean;

  @Expose()
  fname: string;

  @Expose()
  lname: string;

  @Expose()
  companyName: string;

  @Expose()
  email: string;

  @Expose()
  confirmed: boolean;

  @Expose()
  privileges: string[];

  @Expose()
  _id: Types.ObjectId;
}
