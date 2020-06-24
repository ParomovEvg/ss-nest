import { ResDto } from '../../asets/eitherToDto';
export declare enum PhoneErrors {
    PhoneAlreadyExists = "PhoneAlreadyExists",
    PhoneNotFound = "PhoneNotFound"
}
export declare class FlatPhoneDto {
    id: number;
    phone: string;
}
export declare class GetPhoneDto {
    phone: string;
}
export declare class CreatePhoneDto {
    phone: string;
}
export declare class CreatePhoneResDto implements ResDto {
    payload: FlatPhoneDto;
}
export declare class GetAllPhoneResDto implements ResDto {
    payload: FlatPhoneDto[];
}