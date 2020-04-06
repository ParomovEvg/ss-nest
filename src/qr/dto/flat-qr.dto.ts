import { FlatPhoneDto } from '../../auth/dto/flat-phone.dto';

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
