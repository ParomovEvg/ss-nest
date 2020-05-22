import { ResDto } from '../../asets/eitherToDto';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { MdFieldAlreadyExistInScreen } from './md.errors.dto';

class MdDto {
  id: number;
  value: string;
}
class MdFieldDto {
  id: number;
  name: string;
  label: string;
  values: MdDto[];
}
class FlatMdFieldDto {
  id: number;
  name: string;
  label: string;
}
class MdFieldContentDto {
  id: number;
  name: string;
  label: string;
  value: MdDto;
}

//=====================
// CreateMdFieldDto
export class CreateMdFieldDtoDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  label: string;
}

export class CreateMdFieldDtoResDto implements ResDto {
  payload?: FlatMdFieldDto;
  ScreenNotFoundById?: ScreenNotFoundById;
  MdFieldAlreadyExistInScreen?: MdFieldAlreadyExistInScreen;
}

//=====================
// CreateMdDto
export class CreateMdDtoDto {

}

export class CreateMdDtoResDto implements ResDto {
  payload?: MdDto;
}

