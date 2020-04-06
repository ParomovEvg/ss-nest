import { CheckoutErrors } from './checkout-errors';

export class CheckoutNotFoundByFn extends Error {
  fn: string;
  constructor(fn: string) {
    super();
    this.name = CheckoutErrors.CheckoutNotFoundByFn;
    this.message = `Checkout where ${fn} not found`;
    this.fn = fn;
  }
}

export class CheckoutNotFoundById extends Error{
  id: number;
  constructor(id: number) {
    super();
    this.name = CheckoutErrors.CheckoutNotFoundById;
    this.message = `Checkout where id = ${id} not found`;
    this.id = id;
  }
}
