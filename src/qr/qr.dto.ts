import { IsNotEmpty, IsOptional } from 'class-validator';
import { FlatPhoneDto } from '../auth/phone/phone.dto';
import { ResDto } from '../asets/eitherToDto';
import { DrawErrors } from './draw/draw.dto';
import { CheckoutErrors } from './checkout/checkout.dto';
import { CheckoutNotFoundByFn } from './checkout/checkout.errors.dto';
import { NotDrawNow } from './draw/draw.errors.dto';
import { QrAlreadyExists, QrRegistrationLimitExceeded, QrSalaryNotEnough } from './qr.errors.dto';

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
  checkoutId: number;
  drawId: number;
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
  s: string;
  @IsOptional()
  qrString: string;
}

export class CreateQrResDto implements ResDto {
  payload?: FlatQrDto;
  error: {
    [EE.CheckoutErrors.CheckoutNotFoundByFn]: CheckoutNotFoundByFn;
    [EE.DrawErrors.NotDrawNow]: NotDrawNow;
    [QrErrorsDto.QrAlreadyExists]: QrAlreadyExists;
    [QrErrorsDto.QrSalaryNotEnough]: QrSalaryNotEnough;
    [QrErrorsDto.QrRegistrationLimitExceeded]: QrRegistrationLimitExceeded;
  };
}
//=====================
