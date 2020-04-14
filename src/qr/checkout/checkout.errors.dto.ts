import { createError, ErrorDto } from '../../asets/error.dto';
import { CheckoutErrors } from './checkout.dto';

enum CheckoutNotFoundByIdName {
  CheckoutNotFoundById = CheckoutErrors.CheckoutNotFoundById,
}

export class CheckoutNotFoundById implements ErrorDto {
  name: CheckoutNotFoundByIdName;
  message: string;
  param: {
    id: number;
  };
}

export const createCheckoutNotFoundById = createError(
  CheckoutNotFoundById,
  CheckoutNotFoundByIdName.CheckoutNotFoundById,
  ({ id }) => `Checkout where id = ${id} not found`,
);

enum CheckoutNotFoundByFnName {
  CheckoutNotFoundByFn = CheckoutErrors.CheckoutNotFoundByFn,
}

export class CheckoutNotFoundByFn implements ErrorDto {
  name: CheckoutNotFoundByFnName;
  message: string;
  param: {
    fn: string;
  };
}

export const createCheckoutNotFoundByFn = createError(
  CheckoutNotFoundByFn,
  CheckoutNotFoundByFnName.CheckoutNotFoundByFn,
  ({ fn }) => `Checkout where fn = ${fn} not found`,
);

export enum CheckoutAlreadyExistName {
  CheckoutAlreadyExists = CheckoutErrors.CheckoutAlreadyExists,
}
export class CheckoutAlreadyExists implements ErrorDto {
  name: CheckoutAlreadyExistName;
  message: string;
  param: {
    fn: string;
  };
}
export const createCheckoutAlreadyExist = createError(
  CheckoutAlreadyExists,
  CheckoutAlreadyExistName.CheckoutAlreadyExists,
  ({ fn }) => `Checkout where fn = ${fn} already exists`,
);
