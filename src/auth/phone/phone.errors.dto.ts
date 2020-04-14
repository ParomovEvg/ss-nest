import { createError, ErrorDto } from '../../asets/error.dto';
import { PhoneErrors } from './phone.dto';

export enum PhoneNotFoundName {
  PhoneAlreadyExists = PhoneErrors.PhoneNotFound,
}

export class PhoneNotFound implements ErrorDto {
  name: PhoneNotFoundName;
  message: string;
  param: {
    phone: string;
  };
}

export const createPhoneNotFound = createError(
  PhoneNotFound,
  PhoneNotFoundName.PhoneAlreadyExists,
  ({ phone }) => `Phone ${phone} not found`,
);

enum PhoneAlreadyExistsName {
  PhoneAlreadyExists = PhoneErrors.PhoneAlreadyExists,
}


export class PhoneAlreadyExists implements ErrorDto{
  name: PhoneAlreadyExistsName;
  message: string;
  param: {
    phone:string
  }
}

export const createPhoneAlreadyExists = createError(
  PhoneAlreadyExists,
  PhoneAlreadyExistsName.PhoneAlreadyExists,
  ({phone}) => `Phone ${phone} already exists`
);
