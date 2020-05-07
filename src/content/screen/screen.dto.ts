import { ScreenAlreadyExists } from './screen.errors.dto';
import { ResDto } from '../../asets/eitherToDto';
import {  TextFieldContentDto } from '../text/text.dto';

export class FlatScreenDto {
  id: number;
  name: string;
}

export class ScreenContentDto {
  id:number;
  name:string;
  textFields?: TextFieldContentDto[];
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

