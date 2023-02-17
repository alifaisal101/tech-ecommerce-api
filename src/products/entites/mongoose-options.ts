import { Schema } from 'mongoose';
import { unRequiredString } from '../../util/options/mongoose-options';

export const locationProps = {
  required: true,
  moreInfo: unRequiredString,
};

export const sellerId = {
  required: true,
  ref: 'User',
  type: Schema.Types.ObjectId,
};
