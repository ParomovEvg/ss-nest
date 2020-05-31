import { ErrorDto } from '../../asets/error.dto';
declare enum CheckoutNotFoundByIdName {
    CheckoutNotFoundById = "CheckoutNotFoundById"
}
export declare class CheckoutNotFoundById implements ErrorDto {
    name: CheckoutNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createCheckoutNotFoundById: (param: {
    id: number;
}) => CheckoutNotFoundById;
declare enum CheckoutNotFoundByFnName {
    CheckoutNotFoundByFn = "CheckoutNotFoundByFn"
}
export declare class CheckoutNotFoundByFn implements ErrorDto {
    name: CheckoutNotFoundByFnName;
    message: string;
    param: {
        fn: string;
    };
}
export declare const createCheckoutNotFoundByFn: (param: {
    fn: string;
}) => CheckoutNotFoundByFn;
export declare enum CheckoutAlreadyExistName {
    CheckoutAlreadyExists = "CheckoutAlreadyExists"
}
export declare class CheckoutAlreadyExists implements ErrorDto {
    name: CheckoutAlreadyExistName;
    message: string;
    param: {
        fn: string;
    };
}
export declare const createCheckoutAlreadyExist: (param: {
    fn: string;
}) => CheckoutAlreadyExists;
export {};
