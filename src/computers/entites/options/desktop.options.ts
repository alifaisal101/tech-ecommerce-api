import {
  requiredNumber,
  unRequiredString,
} from 'src/util/options/mongoose-options';

export const powerSupply = {
  required: true,
  type: {
    name: unRequiredString,
    maker: unRequiredString,
    modularity: unRequiredString,
    wattage: requiredNumber,
  },
};

export const compCase = {
  required: false,
  type: {
    tower: unRequiredString,
    maker: unRequiredString,
    model: unRequiredString,
  },
};

export const cooler = {
  required: false,
  type: {
    maker: unRequiredString,
    name: unRequiredString,
    coolerType: unRequiredString,
  },
};
