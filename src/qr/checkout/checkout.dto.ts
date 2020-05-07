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
  CheckoutAlreadyExists?: CheckoutAlreadyExists;
}

export class DeleteCheckoutResDto implements ResDto {
  payload?: {
    checkoutId: number;
  };
  CheckoutNotFoundById?: CheckoutNotFoundById;
}

export class FindAllCheckoutsResDto implements ResDto {
  payload?: FlatCheckoutDto[];
}

export class FindCheckoutResDto implements ResDto {
  CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
  payload?: FlatCheckoutDto;
}

export class FindQrsOfCheckoutResDto implements ResDto {
  payload?: FlatQrDto[];
  CheckoutNotFoundByFn?: CheckoutNotFoundByFn;
}
