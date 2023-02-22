import { IsBoolean, IsMongoId, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class ProductApproveDto {
  @IsMongoId()
  productId: Types.ObjectId;

  @IsBoolean()
  approve: boolean;

  @IsBoolean()
  @IsOptional()
  remove?: boolean;
}
