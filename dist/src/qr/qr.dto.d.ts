import { FlatPhoneDto } from '../auth/phone/phone.dto';
import { ResDto } from '../asets/eitherToDto';
import { FlatDrawDto } from './draw/draw.dto';
import { FlatCheckoutDto } from './checkout/checkout.dto';
import { CheckoutNotFoundByFn } from './checkout/checkout.errors.dto';
import { NotDrawNow } from './draw/draw.errors.dto';
import { QrAlreadyExists, QrRegistrationLimitExceeded, QrSalaryNotEnough } from './qr.errors.dto';
import { Qr } from './qr.entity';
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
export declare class FlatAllQrDto {
    id: string;
    phone: FlatPhoneDto;
    checkout: FlatCheckoutDto;
    draw: FlatDrawDto;
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
export declare class GetQrNumResDto implements ResDto {
    payload: string;
}
export declare class GetAllQrResDto implements ResDto {
    payload: FlatAllQrDto[];
}
export declare class FilterQrDto {
    drawId?: number;
    checkoutId?: number;
    phone?: string;
    fd?: string;
    fp?: string;
    page?: number;
}
export declare class GetQrFilterDto {
    qrs: Qr[];
    count: number;
}
export declare class FlatGetQrFilterDto {
    qrs: FlatAllQrDto[];
    count: number;
}
export declare class FilterQrResDto implements ResDto {
    payload: FlatGetQrFilterDto;
}
