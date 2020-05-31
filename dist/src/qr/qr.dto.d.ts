import { FlatPhoneDto } from '../auth/phone/phone.dto';
import { ResDto } from '../asets/eitherToDto';
import { FlatCheckoutDto } from './checkout/checkout.dto';
import { CheckoutNotFoundByFn } from './checkout/checkout.errors.dto';
import { NotDrawNow } from './draw/draw.errors.dto';
import { QrAlreadyExists, QrRegistrationLimitExceeded, QrSalaryNotEnough } from './qr.errors.dto';
export declare enum QrErrorsDto {
    QrRegistrationLimitExceeded = "QrRegistrationLimitExceeded",
    QrSalaryNotEnough = "QrSalaryNotEnough",
    QrAlreadyExists = "QrAlreadyExists"
}
export declare class FlatQrDto {
    id: string;
    phone: FlatPhoneDto;
    checkout: FlatCheckoutDto;
    fp: string;
    fd: string;
    s: number;
    time: string;
}
export declare class CreateQrDto {
    fn: string;
    fp: string;
    fd: string;
    s: number;
    qrString: string;
}
export declare class CreateQrResDto implements ResDto {
    payload?: FlatQrDto;
    CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
    NotDrawNow?: NotDrawNow;
    QrAlreadyExists?: QrAlreadyExists;
    QrSalaryNotEnough?: QrSalaryNotEnough;
    QrRegistrationLimitExceeded?: QrRegistrationLimitExceeded;
}
