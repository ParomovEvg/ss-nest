import { ScreenAlreadyExists, ScreenNotFoundById } from './screen.errors.dto';
import { ResDto } from '../../asets/eitherToDto';
import { TextFieldContentDto, TextFieldDto } from '../text/text.dto';
import { ImgFieldContentDto, ImgFieldDto } from '../img/img.dto';
import { MdFieldContentDto } from '../md/md.dto';
export declare class FlatScreenDto {
    id: number;
    name: string;
}
export declare class ScreenDto {
    id: number;
    name: string;
    textFields: TextFieldDto[];
    imgFields: ImgFieldDto[];
    mdFields: MdFieldContentDto[];
}
export declare class ScreenContentDto {
    id: number;
    name: string;
    textFields: TextFieldContentDto[];
    imgFields: ImgFieldContentDto[];
    mdFields: MdFieldContentDto[];
}
export declare class CreateScreenDto {
    name: string;
}
export declare class CreateScreenResDto implements ResDto {
    payload?: FlatScreenDto;
    ScreenAlreadyExists?: ScreenAlreadyExists;
}
export declare class FindAllScreensResDto implements ResDto {
    payload: FlatScreenDto[];
}
export declare class FindScreenByIdResDto implements ResDto {
    payload?: ScreenDto;
    ScreenNotFoundById?: ScreenNotFoundById;
}
export declare class DeleteScreenResDto implements ResDto {
    payload?: {
        id: number;
    };
    ScreenNotFoundById?: ScreenNotFoundById;
}
export declare class ChangeScreenNameDto {
    name: string;
}
export declare class ChangeScreenNameResDto implements ResDto {
    payload?: FlatScreenDto;
    ScreenNotFoundById?: ScreenNotFoundById;
}
