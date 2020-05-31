import { ErrorDto } from '../../asets/error.dto';
declare enum PasswordsOfPhoneNotFoundName {
    PasswordsOfPhoneNotFound = "PasswordsOfPhoneNotFound"
}
export declare class PasswordsOfPhoneNotFound implements ErrorDto {
    name: PasswordsOfPhoneNotFoundName;
    message: string;
    param: {
        phone: string;
    };
}
export declare const createPasswordsOfPhoneNotFound: (param: {
    phone: string;
}) => PasswordsOfPhoneNotFound;
export {};
