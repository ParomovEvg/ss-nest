import Either from '@sweet-monads/either';
export interface ResDto {
  payload?: any;
  error?: any;
}

export function eitherToDto<L extends Error, R>(e: Either<L, R>): ResDto {
  const res: ResDto = {};
  e.mapRight(r => (res.payload = r)).mapLeft(e => (res.error = e));
  return res;
}
