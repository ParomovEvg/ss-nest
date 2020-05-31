import { ErrorDto } from '../../asets/error.dto';
export declare enum DatesAreTakenNames {
    DatesAreTaken = "DatesAreTaken"
}
export declare class DatesAreTaken implements ErrorDto {
    name: DatesAreTakenNames;
    message: string;
    param: {
        startTaken: string;
        endTaken: string;
        start: string;
        end: string;
    };
}
export declare const createDatesAreTaken: (param: {
    startTaken: string;
    endTaken: string;
    start: string;
    end: string;
}) => DatesAreTaken;
declare enum EndEarlierThanStartName {
    EndEarlierThanStart = "EndEarlierThanStart"
}
export declare class EndEarlierThanStart implements ErrorDto {
    name: EndEarlierThanStartName;
    message: string;
    param: {
        start: string;
        end: string;
    };
}
export declare const createEndEarlierThanStart: (param: {
    start: string;
    end: string;
}) => EndEarlierThanStart;
declare enum DrawNotFoundByIdName {
    DrawNotFoundById = "DrawNotFoundById"
}
export declare class DrawNotFoundById implements ErrorDto {
    name: DrawNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createDrawNotFoundById: (param: {
    id: number;
}) => DrawNotFoundById;
declare enum NotDrawNowName {
    NotDrawNow = "NotDrawNow"
}
export declare class NotDrawNow implements ErrorDto {
    name: NotDrawNowName;
    message: string;
    param: {
        now: string;
    };
}
export declare const createNotDrawNow: (param: {
    now: string;
}) => NotDrawNow;
declare enum DateNotValidName {
    DateNotValid = "DateNotValid"
}
export declare class DateNotValid implements ErrorDto {
    name: DateNotValidName;
    message: string;
    param: {
        dateString: string;
    };
}
export declare const createDateNotValid: (param: {
    dateString: string;
}) => DateNotValid;
export {};
