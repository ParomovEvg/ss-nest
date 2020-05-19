import { ResDto } from '../../asets/eitherToDto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  ImgFieldAlreadyExistsInScreen,
  ImgFieldNotFoundById,
  ImgNotFoundById,
  ImgNotFoundByIdInField,
  ImgVersionBeforeNotFound,
} from './img.errors.dto';

export class ImgFieldDto {
  id: number;
  name: string;
  img: ImgDto[];
}
export class ImgFieldContentDto {
  id: number;
  name: string;
  img?: ImgDto;
}
export class FlatImgFieldDto {
  id: number;
  name: string;
}
export class ImgDto {
  id: number;
  path: string;
  url: string;
  host: string;
}
//=====================
// CreateImgField

export class CreateImgFieldDto {
  @IsNotEmpty()
  @IsNumber()
  screenId: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CreateImgFieldResDto implements ResDto {
  payload?: FlatImgFieldDto;
  ScreenNotFoundById?: ScreenNotFoundById;
  ImgFieldAlreadyExistsInScreen?: ImgFieldAlreadyExistsInScreen;
}

//===================
// DeleteImgField
export class DeleteImgFieldResDto implements ResDto {
  payload?: { id: number };
  ImgFieldNotFoundById?: ImgFieldNotFoundById;
}

//=====================
// CreateImg
export class CreateImgResDto implements ResDto {
  payload?: ImgDto;
  ImgFieldNotFoundById?: ImgFieldNotFoundById;
}

//=====================
// FindImgFieldById
export class FindImgFieldByIdResDto implements ResDto {
  payload?: ImgFieldDto;
  ImgFieldNotFoundById?: ImgFieldNotFoundById;
}

//=====================
// GetImgBefore
export class GetImgBeforeResDto implements ResDto {
  payload?: ImgDto;
  ImgVersionBeforeNotFound?: ImgVersionBeforeNotFound;
  ImgFieldNotFoundById?: ImgFieldNotFoundById;
  ImgNotFoundByIdInField?: ImgNotFoundByIdInField;
}
