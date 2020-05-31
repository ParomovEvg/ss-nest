export declare class TextFieldDto {
    id: number;
    name: string;
    values: TextDto[];
}
export declare class TextDto {
    id: number;
    createDate: string;
    value: string;
}
export declare class FlatTextFieldDto {
    id: number;
    name: string;
}
export declare class TextFieldContentDto {
    id: number;
    name: string;
    value?: TextContentDto;
}
export declare class TextContentDto {
    id: number;
    value: string;
}
import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { TextFieldAlreadyExists, TextFieldNotFoundById } from './text.errors.dto';
export declare class CreateTextFieldDto {
    name: string;
    screenId: number;
}
export declare class CreateTextFieldResDto implements ResDto {
    payload?: FlatTextFieldDto;
    ScreenNotFoundById?: ScreenNotFoundById;
    TextFieldAlreadyExists?: TextFieldAlreadyExists;
}
export declare class CreateTextDto {
    value: string;
    fieldId: number;
}
export declare class CreateTextResDto implements ResDto {
    payload?: TextDto;
    TextFiledNotFoundById?: TextFieldNotFoundById;
}
export declare class FindTextOfFieldResDto implements ResDto {
    payload?: TextFieldDto;
    TextFiledNotFoundById?: TextFieldNotFoundById;
}
export declare class DeleteTextFieldResDto implements ResDto {
    payload?: {
        id: number;
    };
    TextFieldNotFoundById?: TextFieldNotFoundById;
}
