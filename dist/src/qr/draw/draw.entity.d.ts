import { Qr } from '../qr.entity';
export declare class Draw {
    id: number;
    start: Date;
    end: Date;
    description: string;
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
    drawQrs: Qr[];
}
