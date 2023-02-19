import {
  isDefined,
  isNotEmpty,
  isObject,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsValidObject(
  /*
   The properties of a valid object, must be passed to the decorator when called
   ex: person object must have a name which is a string and optioanally an age property which is a number,
   the underscore at the end of the property name indicates that a property is optional {name:"string", age_:"number"}
  */
  validObjProps: object,
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [validObjProps],
      options: validationOptions,
      validator: {
        validate(input: unknown) {
          const validObjProps_arr = Object.keys(validObjProps);
          if (!isObject(input)) {
            return false;
          }

          for (let i = 0; i < validObjProps_arr.length; i++) {
            const objProp = validObjProps_arr[i];
            // checks if the property is optional
            const propIsOptional = objProp.charAt(objProp.length - 1) === '_';
            // strip out the underscore
            const objProp_stripped = propIsOptional
              ? objProp.slice(0, objProp.length - 1)
              : objProp;

            const inputValue = input[objProp_stripped];
            // if the key doesn't exist in the input (request) object and it's not optional
            if (!isDefined(inputValue)) {
              if (propIsOptional) {
                continue;
              } else {
                return false;
              }
            }

            const validType = validObjProps[objProp];
            if (typeof inputValue !== validType || !isNotEmpty(inputValue)) {
              return false;
            }
          }
          return true;
        },
      },
    });
  };
}
