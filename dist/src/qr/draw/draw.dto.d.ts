import { ResDto } from '../../asets/eitherToDto';
import { DatesAreTaken, EndEarlierThanStart, DrawNotFoundById, DateNotValid, NotDrawNow } from './draw.errors.dto';
import { FlatQrDto } from '../qr.dto';
export declare class FlatDrawDto {
    id: number;
    start: string;
    end: string;
    description: string;
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
}
export declare class FullDrawDto {
    id: number;
    start: string;
    end: string;
    description: string;
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
    drawQrs: FlatQrDto[];
}
export declare enum DrawErrors {
    DatesAreTaken = "DatesAreTaken",
    EndEarlierThanStart = "EndEarlierThanStart",
    DrawNotFoundById = "DrawNotFoundById",
    NotDrawNow = "NotDrawNow",
    DateNotValid = "DateNotValid"
}
export declare class CreateDrawDto {
    start: string;
    end: string;
    description: string;
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
}
export declare class CreateDrawResDto implements ResDto {
    payload?: FlatDrawDto;
    DatesAreTaken?: DatesAreTaken;
    EndEarlierThanStart?: EndEarlierThanStart;
    DateNotValid?: DateNotValid;
}
export declare class CreateDrawNextDto {
    end: string;
    description: string;
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
}
export declare class DeleteDrawDto {
    id: number;
}
export declare class DeleteDrawResDto implements ResDto {
    payload?: {
        id: number;
    };
    DrawNotFoundById?: DrawNotFoundById;
}
export declare class FindNowDrawResDto {
    payload?: FlatDrawDto;
    NotDrawNow?: NotDrawNow;
}
export declare class FindAllDrawResDto {
    payload?: FlatDrawDto[];
}
export declare class ChangeDrawDto {
    sLimit: number;
    qrLimit: number;
    qrLimitPeriodMS: number;
}
export declare class ChangeDrawResDto implements ResDto {
    payload?: FlatDrawDto;
    DrawNotFoundById?: DrawNotFoundById;
}
export declare class FindFullDrawDto {
    id: number;
}
export declare class FindFullDrawResDto implements ResDto {
    payload?: FullDrawDto;
    DrawNotFoundById?: DrawNotFoundById;
}
