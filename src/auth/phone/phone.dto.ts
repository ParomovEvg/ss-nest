import { IsMobilePhone,  } from 'class-validator';
import { ResDto } from '../../asets/eitherToDto';
import { PhoneAlreadyExists } from './phone.errors.dto';

export enum PhoneErrors {
  PhoneAlreadyExists = 'PhoneAlreadyExists',
  PhoneNotFound = 'PhoneNotFound',
}
export class FlatPhoneDto {
  id: number;
  phone: string;
}

export class CreatePhoneDto {
  @IsMobilePhone('ru-RU')
  phone: string;
}
export class CreatePhoneResDto implements ResDto {
  payload: FlatPhoneDto;
}
