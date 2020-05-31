import { ErrorDto } from '../../asets/error.dto';
declare enum MdFieldAlreadyExistInScreenName {
    MdFieldAlreadyExistInScreen = "MdFieldAlreadyExistInScreen"
}
export declare class MdFieldAlreadyExistInScreen implements ErrorDto {
    name: MdFieldAlreadyExistInScreenName;
    message: string;
    param: {
        screenId: number;
        name: string;
    };
}
export declare const createMdFieldAlreadyExistInScreen: (param: {
    screenId: number;
    name: string;
}) => MdFieldAlreadyExistInScreen;
declare enum MdFieldNotFoundByIdName {
    MdFieldNotFoundById = "MdFieldNotFoundById"
}
export declare class MdFieldNotFoundById implements ErrorDto {
    name: MdFieldNotFoundByIdName;
    message: string;
    param: {
        fieldId: number;
    };
}
export declare const createMdFieldNotFoundById: (param: {
    fieldId: number;
}) => MdFieldNotFoundById;
export {};
