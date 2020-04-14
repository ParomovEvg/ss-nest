import { createError, ErrorDto } from '../../asets/error.dto';
import { PasswordErrors } from './password.dto';

enum PasswordsOfPhoneNotFoundName {
  PasswordsOfPhoneNotFound = PasswordErrors.PasswordsOfPhoneNotFound,
}

export class PasswordsOfPhoneNotFound implements ErrorDto {
  name: PasswordsOfPhoneNotFoundName;
  message: string;
  param: {
    phone: string;
  };
}

export const createPasswordsOfPhoneNotFound = createError(
  PasswordsOfPhoneNotFound,
  PasswordsOfPhoneNotFoundName.PasswordsOfPhoneNotFound,
  ({ phone }) => `Phone ${phone} doesn't have passwords`,
);
