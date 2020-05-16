import { right } from 'useful-monads';

export const emptyEitherInPromise = Promise.resolve(right(true))