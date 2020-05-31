import { Password } from '../password/password.entity';
import { Qr } from '../../qr/qr.entity';
export declare class Phone {
    id: number;
    phone: string;
    registrationDate: string;
    isAdmin: boolean;
    passwords: Password[];
    phoneQrs: Qr[];
}
