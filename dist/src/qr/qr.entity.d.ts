import { Checkout } from './checkout/checkout.entity';
import { Draw } from './draw/draw.entity';
import { Phone } from '../auth/phone/phone.entity';
export declare class Qr {
    id: string;
    phone: Phone;
    checkout: Checkout;
    draw: Draw;
    fp: string;
    fd: string;
    s: number;
    time: Date;
}
