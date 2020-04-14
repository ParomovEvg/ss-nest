import { IsNotEmpty } from 'class-validator';
import { FlatPhoneDto } from '../auth/phone/phone.dto';

export class CreateQrDto {
  @IsNotEmpty()
  fn: string;
  @IsNotEmpty()
  fp: string;
  @IsNotEmpty()
  fd: string;
  @IsNotEmpty()
  s: string;
}

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