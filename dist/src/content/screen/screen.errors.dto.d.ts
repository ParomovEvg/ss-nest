import { ErrorDto } from '../../asets/error.dto';
declare enum ScreenAlreadyExistsName {
    ScreenAlreadyExists = "ScreenAlreadyExists"
}
export declare class ScreenAlreadyExists implements ErrorDto {
    name: ScreenAlreadyExistsName;
    message: string;
    param: {
        name: string;
    };
}
export declare const createScreenAlreadyExists: (param: {
    name: string;
}) => ScreenAlreadyExists;
declare enum ScreenNotFoundByIdName {
    ScreenNotFoundById = "ScreenNotFoundById"
}
export declare class ScreenNotFoundById implements ErrorDto {
    name: ScreenNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createScreenNotFoundById: (param: {
    id: number;
}) => ScreenNotFoundById;
export {};
