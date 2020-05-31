import { ResDto } from '../../asets/eitherToDto';
import { PhoneAlreadyExists } from './phone.errors.dto';
export declare enum PhoneErrors {
    PhoneAlreadyExists = "PhoneAlreadyExists",
    PhoneNotFound = "PhoneNotFound"
}
export declare class FlatPhoneDto {
    id: number;
    phone: string;
}
export declare class CreatePhoneDto {
    phone: string;
    password: string;
}
export declare class CreatePhoneResDto implements ResDto {
    payload?: FlatPhoneDto;
    PhoneAlreadyExists?: PhoneAlreadyExists;
}
