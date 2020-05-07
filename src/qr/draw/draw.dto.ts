import { IsDateString, IsNumber, IsString, Min } from 'class-validator';
import { ResDto } from '../../asets/eitherToDto';
import {
  DatesAreTaken,
  EndEarlierThanStart,
  DrawNotFoundById,
  DateNotValid,
  NotDrawNow,
} from './draw.errors.dto';
import { FlatQrDto } from '../qr.dto';

export class FlatDrawDto {
  id: number;
  start: string;
  end: string;
  description: string;
  sLimit: number;
  qrLimit: number;
  qrLimitPeriodMS: number;
}

export class FullDrawDto {
  id: number;
  start: string;
  end: string;
  description: string;
  sLimit: number;
  qrLimit: number;
  qrLimitPeriodMS: number;
  drawQrs: FlatQrDto[];
}

export enum DrawErrors {
  DatesAreTaken = 'DatesAreTaken',
  EndEarlierThanStart = 'EndEarlierThanStart',
  DrawNotFoundById = 'DrawNotFoundById',
  NotDrawNow = 'NotDrawNow',
  DateNotValid = 'DateNotValid',
}

export class CreateDrawDto {
  @IsDateString()
  start: string;
  @IsDateString()
  end: string;
  @IsString()
  description: string;
  @IsNumber()
  @Min(0)
  sLimit: number;
  @IsNumber()
  @Min(0)
  qrLimit: number;
  @IsNumber()
  @Min(0)
  qrLimitPeriodMS: number;
}

export class CreateDrawResDto implements ResDto {
  payload?: FlatDrawDto;
  DatesAreTaken?: DatesAreTaken;
  EndEarlierThanStart?: EndEarlierThanStart;
  DateNotValid?: DateNotValid;
}

export class CreateDrawNextDto {
  @IsDateString()
  end: string;
  @IsString()
  description: string;
  @IsNumber()
  @Min(0)
  sLimit: number;
  @IsNumber()
  @Min(0)
  qrLimit: number;
  @IsNumber()
  @Min(0)
  qrLimitPeriodMS: number;
}

export class DeleteDrawDto {
  id: number;
}
export class DeleteDrawResDto implements ResDto {
  payload?: {
    id: number;
  };
  DrawNotFoundById?: DrawNotFoundById;
}

export class FindNowDrawResDto {
  payload?: FlatDrawDto;
  NotDrawNow?: NotDrawNow;
}

export class FindAllDrawResDto {
  payload?: FlatDrawDto[];
}

//=====================
// ChangeDrawSalaryLimit
export class ChangeDrawDto {
  @IsNumber()
  @Min(0)
  sLimit: number;
  @IsNumber()
  @Min(0)
  qrLimit: number;
  @IsNumber()
  @Min(0)
  qrLimitPeriodMS: number;
}

export class ChangeDrawResDto implements ResDto {
  payload?: FlatDrawDto;
  DrawNotFoundById?: DrawNotFoundById;
}

//=====================
// FindFullQrDto
export class FindFullDrawDto {
  id: number;
}

export class FindFullDrawResDto implements ResDto {
  payload?: FullDrawDto;
  DrawNotFoundById?: DrawNotFoundById;
}
