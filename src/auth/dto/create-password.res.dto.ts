import { ResDto } from '../../asets/eitherToDto';
import { PhoneErrors } from '../phone-service/errors/PhoneErrors';
import { FlatPhoneDto } from './flat-phone.dto';

export enum CreatePasswordResErrors {
  PhoneNotFound = PhoneErrors.PhoneNotFound
}

export class CreatePasswordResDto  implements ResDto {
  error?: {
   name: CreatePasswordResErrors;
   message: string;
   phone: string;
  };
  payload?: FlatPhoneDto;
}