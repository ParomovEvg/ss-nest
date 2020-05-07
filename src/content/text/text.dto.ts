import { FlatScreenDto } from '../screen/screen.dto';

export class FlatTextFieldDto {
  id: number;
  name: string;
  screen: FlatScreenDto;
}

export class FlatTextDto {
  id: number;
  value: string;
  createDate: string;
  field: FlatTextFieldDto;
}

export class TextFieldContentDto {
  id: number;
  name: string;
  value: TextContentDto;
}
export class TextContentDto {
  id: number;
  value: string;
}
//=====================
// CreateTextField
import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { IsNotEmpty } from 'class-validator';
import {
  TextFieldAlreadyExists,
  TextFieldNotFoundById,
} from './text.errors.dto';

export class CreateTextFieldDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  screenId: number;
}

export class CreateTextFieldResDto implements ResDto {
  payload?: FlatTextFieldDto;
  ScreenNotFoundById?: ScreenNotFoundById;
  TextFieldAlreadyExists?: TextFieldAlreadyExists;
}

//=====================
// CreateText
export class CreateTextDto {
  @IsNotEmpty()
  value: string;
  @IsNotEmpty()
  fieldId: number;
}

export class CreateTextResDto implements ResDto {
  payload?: FlatTextDto;
}

//=====================
// FindTextOfField
export class FindTextOfFieldResDto implements ResDto {
  payload?: FlatTextDto[];
  TextFiledNotFoundById?: TextFieldNotFoundById;
}
