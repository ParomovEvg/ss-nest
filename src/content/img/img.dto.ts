import { ResDto } from '../../asets/eitherToDto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { ImgFieldAlreadyExistsInScreen } from './img.errors.dto';

export class ImgFieldDto {
  id: number;
  name: string;
  img: ImgDto[];
}
export class FlatImgFieldDto {
  id: number;
  name: string;
}
export class ImgDto {
  id: number;
  url: string;
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

//=====================
// CreateImg
export class CreateImgDto {
  @IsNotEmpty()
  @IsNumber()
  fieldId: number;

  @IsNotEmpty()
  @IsString()
  url: string;
}

export class CreateImgResDto implements ResDto {
  payload?: ImgDto;
}
