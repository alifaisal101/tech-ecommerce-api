export const filterObj = (obj: object): object => {
  const objKeys = Object.keys(obj);
  objKeys.map((key): void => {
    if (!(obj[key] || false)) {
      delete obj[key];
    }
  });
  return obj;
};
