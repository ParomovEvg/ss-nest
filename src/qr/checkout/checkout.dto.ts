import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { ResDto } from '../../asets/eitherToDto';
import {
  CheckoutAlreadyExists,
  CheckoutNotFoundByFn,
  CheckoutNotFoundById,
} from './checkout.errors.dto';
import { FlatQrDto } from '../qr.dto';
import { PhoneErrors } from '../../auth/phone/phone.dto';
import { PhoneAlreadyExists } from '../../auth/phone/phone.errors.dto';

export enum CheckoutErrors {
  CheckoutNotFoundByFn = 'CheckoutNotFoundByFn',
  CheckoutNotFoundById = 'CheckoutNotFoundById',
  CheckoutAlreadyExists = 'CheckoutAlreadyExists',
}


export class FlatCheckoutDto {
  id: number;
  fn: string;
  address: string;
}

export class CreateCheckoutDto {
  @IsNumberString()
  @IsNotEmpty()
  fn: string;

  @IsOptional()
  @IsString()
  address: string;
}

export class CreateCheckoutResDto implements ResDto {
  payload?: FlatCheckoutDto;
  error: {
    [CheckoutErrors.CheckoutAlreadyExists]?: CheckoutAlreadyExists;
  };
}

export class DeleteCheckoutResDto implements ResDto {
  payload?: {
    checkoutId: number;
  };
  error: {
    [CheckoutErrors.CheckoutNotFoundById]?: CheckoutNotFoundById;
  };
}

export class FindAllCheckoutsResDto implements ResDto {
  payload?: FlatCheckoutDto[];
  error: {};
}

export class FindCheckoutResDto implements ResDto {
  error: {
    [CheckoutErrors.CheckoutNotFoundByFn]?: CheckoutNotFoundByFn;
  };
  payload?: FlatCheckoutDto;
}

export class FindQrsOfCheckoutResDto implements ResDto {
  payload?: FlatQrDto[];
  error: {
    [CheckoutErrors.CheckoutNotFoundByFn]?: CheckoutNotFoundByFn;
  };
}
