import { ResDto } from '../../asets/eitherToDto';
import { FlatPhoneDto } from '../phone/phone.dto';
import { PasswordsOfPhoneNotFound } from './password.errors.dto';
export declare class CreatePasswordDto {
    password: string;
}
export declare enum PasswordErrors {
    PasswordsOfPhoneNotFound = "PasswordsOfPhoneNotFound"
}
export declare class CreatePasswordResDto implements ResDto {
    PasswordsOfPhoneNotFound?: PasswordsOfPhoneNotFound;
    payload?: FlatPhoneDto;
}
