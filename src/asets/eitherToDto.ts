import { ErrorDto } from './error.dto';
import { Either } from '@sweet-monads/either';

export interface ResDto {
  payload?: any;
  error: {};
}

export function eitherToDto<L extends ErrorDto, R>(
  e: Either<L, R>,
): {
  payload?: R;
  error: {
    [R in L['name']]: L;
  };
} {
  const res: any = {
    error: {},
  };
  e.mapRight(r => (res.payload = r)).mapLeft(e => {
    res.error[e.name] = e;
  });
  return res;
}
