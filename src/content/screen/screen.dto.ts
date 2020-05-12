import { ScreenAlreadyExists, ScreenNotFoundById } from './screen.errors.dto';
import { ResDto } from '../../asets/eitherToDto';
import { FlatTextFieldDto, TextFieldContentDto, TextFieldDto } from '../text/text.dto';

export class FlatScreenDto {
  id: number;
  name: string;
}

export class ScreenDto {
  id: number;
  name: string;
  textFields: TextFieldDto[];
}

export class ScreenContentDto {
  id: number;
  name: string;
  textFields: TextFieldContentDto[];
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
