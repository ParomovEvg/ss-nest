import { right } from '@sweet-monads/either';

export const emptyEitherInPromise = Promise.resolve(right(true))