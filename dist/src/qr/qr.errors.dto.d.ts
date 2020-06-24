import { ErrorDto } from '../asets/error.dto';
declare enum QrAlreadyExistsName {
    QrAlreadyExists = "QrAlreadyExists"
}
export declare class QrAlreadyExists implements ErrorDto {
    name: QrAlreadyExistsName;
    message: string;
    param: {
        fd: string;
        fp: string;
    };
}
export declare const createQrAlreadyExists: (param: {
    fd: string;
    fp: string;
}) => QrAlreadyExists;
declare enum QrSalaryNotEnoughName {
    QrSalaryNotEnough = "QrSalaryNotEnough"
}
export declare class QrSalaryNotEnough implements ErrorDto {
    name: QrSalaryNotEnoughName;
    message: string;
    param: {
        s: number;
        sLimit: number;
    };
}
export declare const createQrSalaryNotEnough: (param: {
    s: number;
    sLimit: number;
}) => QrSalaryNotEnough;
declare enum QrRegistrationLimitExceededName {
    QrRegistrationLimitExceeded = "QrRegistrationLimitExceeded"
}
export declare class QrRegistrationLimitExceeded implements ErrorDto {
    name: QrRegistrationLimitExceededName;
    message: string;
    param: {
        nextTime: string;
        phone: string;
        qrLimit: number;
    };
}
export declare const createQrRegistrationLimitExceeded: (param: {
    nextTime: string;
    phone: string;
    qrLimit: number;
}) => QrRegistrationLimitExceeded;
declare enum PhoneIdNotFoundByPhoneName {
    PhoneIdNotFoundByPhone = "PhoneNotFoundByPhone"
}
export declare class PhoneIdNotFoundByPhone implements ErrorDto {
    name: PhoneIdNotFoundByPhoneName;
    message: string;
    param: {
        phone: string;
    };
}
export declare const createPhoneIdNotFoundByPhone: (param: {
    phone: string;
}) => PhoneIdNotFoundByPhone;
export {};
