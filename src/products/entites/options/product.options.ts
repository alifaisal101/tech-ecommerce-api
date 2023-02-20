import { Schema } from 'mongoose';
import {
  requiredString,
  unRequiredString,
} from '../../../util/options/mongoose-options';

export const locationProps = {
  required: true,
  type: {
    state: requiredString,
    moreInfo: unRequiredString,
  },
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
