import { ErrorDto } from '../../asets/error.dto';
declare enum ImgFieldAlreadyExistsInScreenName {
    ImgFieldAlreadyExistsInScreen = "ImgFieldAlreadyExistsInScreen"
}
export declare class ImgFieldAlreadyExistsInScreen implements ErrorDto {
    name: ImgFieldAlreadyExistsInScreenName;
    message: string;
    param: {
        name: string;
        screenId: number;
    };
}
export declare const createImgFieldAlreadyExistsInScreen: (param: {
    name: string;
    screenId: number;
}) => ImgFieldAlreadyExistsInScreen;
declare enum ImgFieldNotFoundByIdName {
    ImgFieldNotFoundById = "ImgFieldNotFoundById"
}
export declare class ImgFieldNotFoundById implements ErrorDto {
    name: ImgFieldNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createImgFieldNotFoundById: (param: {
    id: number;
}) => ImgFieldNotFoundById;
declare enum ImgVersionBeforeNotFoundName {
    ImgVersionBeforeNotFound = "ImgVersionBeforeNotFound"
}
export declare class ImgVersionBeforeNotFound implements ErrorDto {
    name: ImgVersionBeforeNotFoundName;
    message: string;
    param: {
        fieldId: number;
        imgId: number;
    };
}
export declare const createImgVersionBeforeNotFound: (param: {
    fieldId: number;
    imgId: number;
}) => ImgVersionBeforeNotFound;
declare enum ImgNotFoundByIdName {
    ImgNotFoundById = "ImgNotFoundById"
}
export declare class ImgNotFoundById implements ErrorDto {
    name: ImgNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createImgNotFoundById: (param: {
    id: number;
}) => ImgNotFoundById;
declare enum ImgNotFoundByIdInFieldName {
    ImgNotFoundByIdInField = "ImgNotFoundByIdInField"
}
export declare class ImgNotFoundByIdInField implements ErrorDto {
    name: ImgNotFoundByIdInFieldName;
    message: string;
    param: {
        imgId: number;
        fieldId: number;
    };
}
export declare const createImgNotFoundByIdInField: (param: {
    imgId: number;
    fieldId: number;
}) => ImgNotFoundByIdInField;
export {};
