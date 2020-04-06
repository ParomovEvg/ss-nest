import { IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';
import { ResDto } from '../../../asets/eitherToDto';
import { FlatCheckout } from '../../dto/flat-checkout';

export class CreateCheckoutDto {
  @IsNumberString()
  @IsNotEmpty()
  fn:string;

  @IsOptional()
  @IsString()
  address:string;
}

export class CreateCheckoutResDto implements ResDto{
  payload?: FlatCheckout;
}