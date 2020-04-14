import { IsDateString, IsString } from 'class-validator';
import { ResDto } from '../../asets/eitherToDto';
import {
  DatesAreTaken,
  EndEarlierThanStart,
  DrawNotFoundById,
  DateNotValid,
  NotDrawNow,
} from './draw.errors.dto';

export class FlatDrawDto {
  id: number;
  start: string;
  end: string;
  description: string;
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
}

export class CreateDrawResDto implements ResDto {
  payload?: FlatDrawDto;
  error: {
    [DrawErrors.DatesAreTaken]?: DatesAreTaken;
    [DrawErrors.EndEarlierThanStart]?: EndEarlierThanStart;
    [DrawErrors.DateNotValid]?: DateNotValid;
  };
}

export class CreateDrawNextDto {
  @IsDateString()
  end: string;

  @IsString()
  description: string;
}

export class DeleteDrawDto {
  id: number;
}
export class DeleteDrawResDto implements ResDto {
  payload?: {
    id: number;
  };
  error: {
    [DrawErrors.DrawNotFoundById]?: DrawNotFoundById;
  };
}

export class FindNowDrawResDto {
  payload?: FlatDrawDto;
  error: {
    [DrawErrors.NotDrawNow]?: NotDrawNow;
  };
}

export class FindAllDrawResDto {
  payload?: FlatDrawDto[];
  error: {};
}
