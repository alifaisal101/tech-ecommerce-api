export const filterObj = (obj: object): object => {
  const objKeys = Object.keys(obj);
  objKeys.map((key): void => {
    if (!(obj[key] || false)) {
      delete obj[key];
    }
  });
  return obj;
};

// receives an object and an array of keys, removes the items from the array the doesn't exist as keys in the object
export const objKeysValidator = (obj: object, keys: string[]): string[] => {
  const objKeys = Object.keys(obj);
  const includedKeys = [];
  for (let i = 0; i < keys.length; i++) {
    if (objKeys.includes(keys[i])) {
      includedKeys.push(keys[i]);
    }
  }
  return includedKeys;
};
