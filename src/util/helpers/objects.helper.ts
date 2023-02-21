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

// receives an object and an array of keys, and return a tuble of the updated object, the deleted key and the property that key pointed at
export const deleteObjProp = (
  obj: object,
  keys: string[],
): [object, string | undefined, unknown] => {
  let deletedKey: string | undefined;
  let prop: unknown;

  const objKeys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (objKeys.includes(keys[i])) {
      prop = obj[keys[i]];
      deletedKey = keys[i];
      delete obj[keys[i]];
    }
  }

  return [obj, deletedKey, prop];
};
