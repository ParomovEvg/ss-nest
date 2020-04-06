import { ResDto } from '../../../asets/eitherToDto';
import { CheckoutErrors } from '../errors/checkout-errors';
import { FlatQrDto } from '../../dto/flat-qr.dto';
enum FindQrsOfCheckoutErrors {
  CheckoutNotFound = CheckoutErrors.CheckoutNotFoundByFn,
}

export class FindQrsOfCheckoutResDto implements ResDto {
  payload?: FlatQrDto[];
  error?: {
    name: FindQrsOfCheckoutErrors;
    message: string;
    fn: string;
  };
}
