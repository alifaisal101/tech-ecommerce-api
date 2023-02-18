import { Schema } from 'mongoose';

export const projectorId = {
  required: false,
  type: Schema.Types.ObjectId,
  ref: 'projector',
};

export const monitorId = {
  requried: false,
  type: Schema.Types.ObjectId,
  ref: 'monitor',
};

export const tvId = {
  required: false,
  type: Schema.Types.ObjectId,
  ref: 'tv',
};
