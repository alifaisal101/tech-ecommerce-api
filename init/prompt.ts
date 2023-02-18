import { hash } from 'bcryptjs';
import { isAlpha, isEmail, isNotEmpty } from 'class-validator';
import * as prompts from 'prompts';
import { question } from 'readline-sync';

const err = (msg: string): never => {
  throw new Error(msg);
};

export const userPrompt = async () => {
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
  ]);
};

export const passwordPrompt = async () => {
  const password = question('Enter Admin Password: ', {
    hideEchoBack: true,
    mask: '',
  });
  const cpassword = question('ReEnter Password: ', {
    hideEchoBack: true,
    mask: '',
  });

  if (password !== cpassword) {
    err("Passwords don't match.");
  }

  return hash(password, 12);
};
