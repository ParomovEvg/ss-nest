import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { ImgFieldAlreadyExistsInScreen, ImgFieldNotFoundById, ImgNotFoundById, ImgNotFoundByIdInField, ImgVersionBeforeNotFound } from './img.errors.dto';
export declare class ImgFieldDto {
    id: number;
    name: string;
    description: string;
    img: ImgDto[];
}
export declare class ImgFieldContentDto {
    id: number;
    name: string;
    description: string;
    img?: ImgDto;
}
export declare class FlatImgFieldDto {
    id: number;
    name: string;
    description: string;
}
export declare class ChangeImgField {
    name: string;
    description: string;
}
export declare class ImgDto {
    id: number;
    path: string;
    url: string;
    host: string;
}
export declare class CreateImgFieldDto {
    screenId: number;
    name: string;
    description: string;
}
export declare class CreateImgFieldResDto implements ResDto {
    payload?: FlatImgFieldDto;
    ScreenNotFoundById?: ScreenNotFoundById;
    ImgFieldAlreadyExistsInScreen?: ImgFieldAlreadyExistsInScreen;
}
export declare class DeleteImgFieldResDto implements ResDto {
    payload?: {
        id: number;
    };
    ImgFieldNotFoundById?: ImgFieldNotFoundById;
}
export declare class CreateImgResDto implements ResDto {
    payload?: ImgDto;
    ImgFieldNotFoundById?: ImgFieldNotFoundById;
}
export declare class FindImgFieldByIdResDto implements ResDto {
    payload?: ImgFieldDto;
    ImgFieldNotFoundById?: ImgFieldNotFoundById;
}
export declare class UpdateImgFieldResDto implements ResDto {
    payload?: ImgFieldDto;
    ImgFieldNotFoundById?: ImgFieldNotFoundById;
}
export declare class GetImgBeforeResDto implements ResDto {
    payload?: ImgDto;
    ImgVersionBeforeNotFound?: ImgVersionBeforeNotFound;
    ImgFieldNotFoundById?: ImgFieldNotFoundById;
    ImgNotFoundByIdInField?: ImgNotFoundByIdInField;
}
export declare class SaveImgLastDto {
    imgId: number;
}
export declare class SaveImgLastResDto implements ResDto {
    payload?: ImgDto;
    ImgNotFoundById?: ImgNotFoundById;
}
