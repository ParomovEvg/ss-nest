import { IsNotEmpty } from 'class-validator';
import { ResDto } from '../../asets/eitherToDto';
import { FlatPhoneDto } from '../phone/phone.dto';
import { PasswordsOfPhoneNotFound } from './password.errors.dto';

export class CreatePasswordDto {
  @IsNotEmpty()
  password: string;
}

export enum PasswordErrors {
  PasswordsOfPhoneNotFound = 'PasswordsOfPhoneNotFound',
}

export class CreatePasswordResDto implements ResDto {
  PasswordsOfPhoneNotFound?: PasswordsOfPhoneNotFound;
  payload?: FlatPhoneDto;
}
