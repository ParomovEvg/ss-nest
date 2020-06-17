import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { MdFieldAlreadyExistInScreen, MdFieldNotFoundById } from './md.errors.dto';
export declare class MdDto {
    id: number;
    value: string;
}
export declare class MdFieldDto {
    id: number;
    name: string;
    label: string;
    values: MdDto[];
}
export declare class FlatMdFieldDto {
    id: number;
    name: string;
    label: string;
}
export declare class MdFieldContentDto {
    id: number;
    name: string;
    label: string;
    values: MdDto[];
}
export declare class CreateMdFieldDto {
    name: string;
    label: string;
    screenId: number;
}
export declare class CreateMdFieldResDto implements ResDto {
    payload?: FlatMdFieldDto;
    ScreenNotFoundById?: ScreenNotFoundById;
    MdFieldAlreadyExistInScreen?: MdFieldAlreadyExistInScreen;
}
export declare class CreateMdDto {
    fieldId: number;
    value: string;
}
export declare class CreateMdResDto implements ResDto {
    payload?: MdDto;
    MdFieldNotFoundById?: MdFieldNotFoundById;
}
export declare class DeleteMdFieldResDto implements ResDto {
    payload?: {
        id: number;
    };
    MdFieldNotFoundById?: MdFieldNotFoundById;
}
export declare class FindMdFieldResDto implements ResDto {
    payload?: MdFieldDto;
    MdFieldNotFoundById?: MdFieldNotFoundById;
}
