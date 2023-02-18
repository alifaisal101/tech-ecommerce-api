import {
  requiredNumber,
  unRequiredString,
} from 'src/util/options/mongoose-options';

export const battary = {
  required: true,
  type: {
    // Battary size in mAH
    size: requiredNumber,
    // How many hours does the battary last
    time: requiredNumber,
  },
};
