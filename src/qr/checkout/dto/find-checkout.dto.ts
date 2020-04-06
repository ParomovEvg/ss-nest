import { ResDto } from '../../../asets/eitherToDto';
import { CheckoutErrors } from '../errors/checkout-errors';
import { FlatCheckout } from '../../dto/flat-checkout';

enum FindCheckoutErrors {
  CheckoutNotFound = CheckoutErrors.CheckoutNotFoundByFn
}

export class FindCheckoutResDto implements ResDto{
  error?: {
    name: FindCheckoutErrors;
    message:string;
    fn:string;
  };
  payload?: FlatCheckout
}