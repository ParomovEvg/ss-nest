import { ResDto } from '../asets/eitherToDto';
export declare class LoginDto {
    password: string;
    phone: string;
}
export declare class LoginResPayload {
    access_token: string;
}
export declare class LoginResDto implements ResDto {
    payload: LoginResPayload;
}
