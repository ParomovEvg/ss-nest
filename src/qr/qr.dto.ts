import { IsNotEmpty, IsOptional } from 'class-validator';
import { FlatPhoneDto } from '../auth/phone/phone.dto';
import { ResDto } from '../asets/eitherToDto';
import { DrawErrors, FlatDrawDto } from './draw/draw.dto';
import { CheckoutErrors, FlatCheckoutDto } from './checkout/checkout.dto';
import {
  CheckoutNotFoundByFn,
  CheckoutNotFoundById,
} from './checkout/checkout.errors.dto';
import { NotDrawNow, DrawNotFoundById } from './draw/draw.errors.dto';
import {
  QrAlreadyExists,
  QrRegistrationLimitExceeded,
  QrSalaryNotEnough,
} from './qr.errors.dto';
import { Qr } from './qr.entity';

export enum QrErrorsDto {
  QrRegistrationLimitExceeded = 'QrRegistrationLimitExceeded',
  QrSalaryNotEnough = 'QrSalaryNotEnough',
  QrAlreadyExists = 'QrAlreadyExists',
}
const EE = {
  DrawErrors,
  CheckoutErrors,
};

export class FlatQrDto {
  id: string;
  phone: FlatPhoneDto;
  checkout: FlatCheckoutDto;
  fp: string;
  fd: string;
  s: number;
  time: string;
}

export class FlatAllQrDto {
  id: string;
  phone: FlatPhoneDto;
  checkout: FlatCheckoutDto;
  draw: FlatDrawDto;
  fp: string;
  fd: string;
  s: number;
  time: string;
}

//=====================
// CreateQr
export class CreateQrDto {
  @IsNotEmpty()
  fn: string;
  @IsNotEmpty()
  fp: string;
  @IsNotEmpty()
  fd: string;
  @IsNotEmpty()
  s: number;
  @IsOptional()
  qrString: string;
}

export class CreateQrResDto implements ResDto {
  payload?: FlatQrDto;
  CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
  NotDrawNow?: NotDrawNow;
  QrAlreadyExists?: QrAlreadyExists;
  QrSalaryNotEnough?: QrSalaryNotEnough;
  QrRegistrationLimitExceeded?: QrRegistrationLimitExceeded;
}
//=====================
//=====================
// GetQrNum
export class GetQrNumResDto implements ResDto {
  payload: string;
}

export class GetAllQrResDto implements ResDto {
  payload: FlatAllQrDto[];
}

export class FilterQrDto {
  drawId?: number;
  checkoutId?: number;
  phone?: string;
  fd?: string;
  fp?: string;
  page?: number;
}

export class GetQrFilterDto {
  qrs: Qr[];
  count: number;
}

export class FlatGetQrFilterDto {
  qrs: FlatAllQrDto[];
  count: number;
}

export class FilterQrResDto implements ResDto {
  payload: FlatGetQrFilterDto;
}
