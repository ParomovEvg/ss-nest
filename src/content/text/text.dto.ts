export class TextFieldDto {
  id: number;
  name: string;
  values: TextDto[];
}

export class TextDto {
  id: number;
  createDate: string;
  value: string;
}

export class FlatTextFieldDto {
  id: number;
  name: string;
}

export class TextFieldContentDto {
  id: number;
  name: string;
  value?: TextContentDto;
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
  payload?: TextDto;
  TextFiledNotFoundById?: TextFieldNotFoundById;
}

//=====================
// FindTextOfField
export class FindTextOfFieldResDto implements ResDto {
  payload?: TextFieldDto;
  TextFiledNotFoundById?: TextFieldNotFoundById;
}

//=====================
// DeleteTextField
export class DeleteTextFieldResDto implements ResDto {
  payload?: { id: number };
  TextFieldNotFoundById?: TextFieldNotFoundById;
}
