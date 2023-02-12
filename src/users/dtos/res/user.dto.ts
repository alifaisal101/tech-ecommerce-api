import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';

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
  _id: ObjectId;
}
