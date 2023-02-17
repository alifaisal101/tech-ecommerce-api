import { isAlpha, isEmail, isNotEmpty, isString } from 'class-validator';
import * as prompts from 'prompts';

const err = (msg: string): never => {
  throw new Error(msg);
};

export const prompt = async () => {
  return prompts([
    {
      type: 'text',
      name: 'fname',
      message: 'Admin account first name:',
      validate: (fname) =>
        isAlpha(fname) && isNotEmpty(fname)
          ? true
          : err(
              `First Name can't contain numbers or special characters, Must not be empty`,
            ),
    },
    {
      type: 'text',
      name: 'lname',
      message: 'Admin account last name:',
      validate: (lname) =>
        isAlpha(lname) && isNotEmpty(lname)
          ? true
          : err(
              `Last Name can't contain numbers or special characters, Must not be empty`,
            ),
    },
    {
      type: 'text',
      name: 'email',
      message: 'Admin account email:',
      validate: (email) =>
        isEmail(email) && isNotEmpty(email) ? true : err(`Email is invalid`),
    },
    {
      type: 'invisible',
      name: 'password',
      message: 'Admin account password:',
      // validate: (password) =>
      //   isString(password) && isNotEmpty(password)
      //     ? true
      //     : err(`Password can't be empty`),
    },
  ]);
};
