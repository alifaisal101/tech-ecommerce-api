import { Schema } from 'mongoose';
import {
  requiredNumber,
  requiredString,
  unRequiredNumber,
  unRequiredString,
} from 'src/util/options/mongoose-options';

export const desktopId = {
  required: false,
  ref: 'Desktop',
  type: Schema.Types.ObjectId,
};

export const laptopId = {
  required: false,
  ref: 'Laptop',
  type: Schema.Types.ObjectId,
};

export const allInOneId = {
  required: false,
  ref: 'allInOne',
  type: Schema.Types.ObjectId,
};

export const ram = {
  requried: true,
  type: {
    size: requiredNumber,
    speed: unRequiredNumber,
    ddrType: requiredString,
  },
};

export const storages = {
  requried: true,
  type: [
    {
      required: true,
      type: {
        size: requiredString,
        model: requiredString,
        maker: requiredString,
        type: requiredString,
      },
    },
  ],
};

export const cpu = {
  required: true,
  type: {
    maker: requiredString,
    model: requiredString,
    speed: unRequiredString,
    cores: requiredNumber,
  },
};

export const gpu = {
  required: true,
  type: {
    maker: requiredString,
    model: requiredString,
    vram: requiredNumber,
  },
};
