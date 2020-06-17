import { ScreenAlreadyExists, ScreenNotFoundById } from './screen.errors.dto';
import { ResDto } from '../../asets/eitherToDto';
import { TextFieldContentDto, TextFieldDto } from '../text/text.dto';
import { ImgFieldContentDto, ImgFieldDto } from '../img/img.dto';
import { MdFieldContentDto, MdFieldDto } from '../md/md.dto';
export declare class FlatScreenDto {
    id: number;
    name: string;
    description: string;
}
export declare class ScreenDto {
    id: number;
    name: string;
    description: string;
    textFields: TextFieldDto[];
    imgFields: ImgFieldDto[];
    mdFields: MdFieldDto[];
}
export declare class ScreenContentDto {
    id: number;
    name: string;
    description: string;
    textFields: TextFieldContentDto[];
    imgFields: ImgFieldContentDto[];
    mdFields: MdFieldContentDto[];
}
export declare class CreateScreenDto {
    name: string;
    description: string;
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
