import { ResDto } from '../../asets/eitherToDto';
import { PhoneErrors } from '../phone-service/errors/PhoneErrors';
import { FlatPhoneDto } from './flat-phone.dto';

export enum CreatePhoneResErrors {
  PhoneAlreadyExists = PhoneErrors.PhoneAlreadyExists
}

export class CreatePhoneResDto implements ResDto {
  payload?: FlatPhoneDto;
  error?: {
    name: CreatePhoneResErrors;
    message: string;
    phone:string;
  };
}
