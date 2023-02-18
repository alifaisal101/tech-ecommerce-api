import { Schema } from 'mongoose';
import { unRequiredString } from '../../../util/options/mongoose-options';

export const locationProps = {
  required: true,
  moreInfo: unRequiredString,
};

export const sellerId = {
  required: true,
  ref: 'User',
  type: Schema.Types.ObjectId,
};

export const computerId = {
  required: false,
  ref: 'Computer',
  type: Schema.Types.ObjectId,
};

export const driveId = {
  required: false,
  ref: 'Drive',
  type: Schema.Types.ObjectId,
};

export const displayId = {
  required: false,
  ref: 'Display',
  type: Schema.Types.ObjectId,
};
