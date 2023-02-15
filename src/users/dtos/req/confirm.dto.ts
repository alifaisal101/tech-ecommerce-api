import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class ConfirmDto {
  @IsMongoId()
  userId: ObjectId;

  @IsString()
  @IsNotEmpty()
  confirmHash: string;
}
