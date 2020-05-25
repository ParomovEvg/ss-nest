import { ScreenAlreadyExists, ScreenNotFoundById } from './screen.errors.dto';
import { ResDto } from '../../asets/eitherToDto';
import {
  FlatTextFieldDto,
  TextFieldContentDto,
  TextFieldDto,
} from '../text/text.dto';
import { ImgFieldContentDto, ImgFieldDto } from '../img/img.dto';
import { MdFieldContentDto } from '../md/md.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class FlatScreenDto {
  id: number;
  name: string;
}

export class ScreenDto {
  id: number;
  name: string;
  textFields: TextFieldDto[];
  imgFields: ImgFieldDto[];
  mdFields: MdFieldContentDto[];
}

export class ScreenContentDto {
  id: number;
  name: string;
  textFields: TextFieldContentDto[];
  imgFields: ImgFieldContentDto[];
  mdFields: MdFieldContentDto[];
}
//=====================
// CreateScreen

export class CreateScreenDto {
  name: string;
}

export class CreateScreenResDto implements ResDto {
  payload?: FlatScreenDto;
  ScreenAlreadyExists?: ScreenAlreadyExists;
}

//=====================
// FindAllScreens
export class FindAllScreensResDto implements ResDto {
  payload: FlatScreenDto[];
}

//=====================
// FindScreenById
export class FindScreenByIdResDto implements ResDto {
  payload?: ScreenDto;
  ScreenNotFoundById?: ScreenNotFoundById;
}

//=====================
// DeleteScreen
export class DeleteScreenResDto implements ResDto {
  payload?: { id: number };
  ScreenNotFoundById?: ScreenNotFoundById;
}

//=====================
// ChangeScreenName
export class ChangeScreenNameDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class ChangeScreenNameResDto implements ResDto {
  payload?: FlatScreenDto;
  ScreenNotFoundById?: ScreenNotFoundById;
}
