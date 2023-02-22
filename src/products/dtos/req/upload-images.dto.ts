import { IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class UploadImagesDto {
  @IsMongoId()
  productId: Types.ObjectId;
}
