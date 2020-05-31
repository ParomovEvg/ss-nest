import { ResDto } from '../../asets/eitherToDto';
import { CheckoutAlreadyExists, CheckoutNotFoundByFn, CheckoutNotFoundById } from './checkout.errors.dto';
import { FlatQrDto } from '../qr.dto';
export declare enum CheckoutErrors {
    CheckoutNotFoundByFn = "CheckoutNotFoundByFn",
    CheckoutNotFoundById = "CheckoutNotFoundById",
    CheckoutAlreadyExists = "CheckoutAlreadyExists"
}
export declare class FlatCheckoutDto {
    id: number;
    fn: string;
    address: string;
}
export declare class CreateCheckoutDto {
    fn: string;
    address: string;
}
export declare class CreateCheckoutResDto implements ResDto {
    payload?: FlatCheckoutDto;
    CheckoutAlreadyExists?: CheckoutAlreadyExists;
}
export declare class DeleteCheckoutResDto implements ResDto {
    payload?: {
        checkoutId: number;
    };
    CheckoutNotFoundById?: CheckoutNotFoundById;
}
export declare class FindAllCheckoutsResDto implements ResDto {
    payload?: FlatCheckoutDto[];
}
export declare class FindCheckoutResDto implements ResDto {
    CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
    payload?: FlatCheckoutDto;
}
export declare class FindQrsOfCheckoutResDto implements ResDto {
    payload?: FlatQrDto[];
    CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
}
