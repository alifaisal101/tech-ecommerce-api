import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class ConfirmDto {
  @IsMongoId()
  userId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  confirmHash: string;
}
