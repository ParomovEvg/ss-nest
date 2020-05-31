import { ErrorDto } from '../../asets/error.dto';
declare enum TextFieldNotFoundByIdName {
    TextFieldNotFoundById = "TextFieldNotFoundById"
}
export declare class TextFieldNotFoundById implements ErrorDto {
    name: TextFieldNotFoundByIdName;
    message: string;
    param: {
        id: number;
    };
}
export declare const createTextFieldNotFoundById: (param: {
    id: number;
}) => TextFieldNotFoundById;
declare enum TextFieldAlreadyExistsName {
    TextFieldAlreadyExists = "TextFieldAlreadyExists"
}
export declare class TextFieldAlreadyExists implements ErrorDto {
    name: TextFieldAlreadyExistsName;
    message: string;
    param: {
        name: string;
        screenId: number;
    };
}
export declare const createTextFieldAlreadyExists: (param: {
    name: string;
    screenId: number;
}) => TextFieldAlreadyExists;
export {};
