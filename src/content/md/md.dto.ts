import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { IsJSON, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  MdFieldAlreadyExistInScreen,
  MdFieldNotFoundById,
} from './md.errors.dto';

export class MdDto {
  id: number;
  value: string;
}
export class MdFieldDto {
  id: number;
  name: string;
  label: string;
  values: MdDto[];
}
export class FlatMdFieldDto {
  id: number;
  name: string;
  label: string;
}
export class MdFieldContentDto {
  id: number;
  name: string;
  label: string;
  value: MdDto;
}

//=====================
// CreateMdField
export class CreateMdFieldDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  label: string;
  @IsNumber()
  @IsNotEmpty()
  screenId: number;
}

export class CreateMdFieldResDto implements ResDto {
  payload?: FlatMdFieldDto;
  ScreenNotFoundById?: ScreenNotFoundById;
  MdFieldAlreadyExistInScreen?: MdFieldAlreadyExistInScreen;
}

//=====================
// CreateMd
export class CreateMdDto {
  @IsNumber()
  @IsNotEmpty()
  fieldId: number;
  @IsString()
  @IsNotEmpty()
  value: string;
}

export class CreateMdResDto implements ResDto {
  payload?: MdDto;
  MdFieldNotFoundById?: MdFieldNotFoundById;
}

//=====================
// DeleteMdField
export class DeleteMdFieldResDto implements ResDto {
  payload?: { id: number };
  MdFieldNotFoundById?: MdFieldNotFoundById;
}

//=====================
// FindMdField
export class FindMdFieldResDto implements ResDto {
  payload?: MdFieldDto;
  MdFieldNotFoundById?: MdFieldNotFoundById;
}
