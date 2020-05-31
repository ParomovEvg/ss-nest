import { ErrorDto } from '../../asets/error.dto';
export declare enum PhoneNotFoundName {
    PhoneAlreadyExists = "PhoneNotFound"
}
export declare class PhoneNotFound implements ErrorDto {
    name: PhoneNotFoundName;
    message: string;
    param: {
        phone: string;
    };
}
export declare const createPhoneNotFound: (param: {
    phone: string;
}) => PhoneNotFound;
declare enum PhoneAlreadyExistsName {
    PhoneAlreadyExists = "PhoneAlreadyExists"
}
export declare class PhoneAlreadyExists implements ErrorDto {
    name: PhoneAlreadyExistsName;
    message: string;
    param: {
        phone: string;
    };
}
export declare const createPhoneAlreadyExists: (param: {
    phone: string;
}) => PhoneAlreadyExists;
export {};
