import { ResDto } from '../../../asets/eitherToDto';
import { CheckoutErrors } from '../errors/checkout-errors';

export class DeleteCheckoutDto {
  CheckoutNotFoundById = CheckoutErrors.CheckoutNotFoundById
}

export class DeleteCheckoutResDto implements ResDto{

  payload?: {
    checkoutId: number
  };
  error?: {
    name: CheckoutErrors.CheckoutNotFoundById;
    id:number;
    message: string;

  }
}