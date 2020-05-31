import { Qr } from '../qr.entity';
export declare class Checkout {
    id: number;
    fn: string;
    address: string;
    checkoutQrs: Qr[];
}
