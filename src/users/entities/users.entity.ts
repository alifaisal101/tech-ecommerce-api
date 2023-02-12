import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredBoolean,
  requiredString,
  uniqueRequiredString,
  unRequiredArrayOfStrings,
  unRequiredString,
} from 'src/util/options/mongoose-options';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop(requiredBoolean)
  isCompany: boolean;

  @Prop(unRequiredString)
  fname?: string;

  @Prop(unRequiredString)
  lname?: string;

  @Prop(unRequiredString)
  companyName?: string;

  @Prop(uniqueRequiredString)
  email: string;

  @Prop(requiredString)
  password: string;

  @Prop(requiredBoolean)
  confirmed: boolean;

  @Prop(requiredString)
  confirmHash: string;

  @Prop(unRequiredArrayOfStrings)
  privileges?: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
