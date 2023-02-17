export const unRequiredString = { type: String, required: false };
export const requiredString = { ...unRequiredString, required: true };
export const uniqueRequiredString = { ...requiredString, unique: true };

export const unRequiredNumber = { type: Number, required: false };
export const requiredNumber = { ...unRequiredNumber, required: true };

export const boolean = { type: Boolean, required: false };
export const requiredBoolean = { ...boolean, required: true };
export const unRequiredArrayOfStrings = {
  required: false,
  type: [requiredString],
};
export const requiredArrayOfString = {
  ...unRequiredArrayOfStrings,
  required: true,
};
