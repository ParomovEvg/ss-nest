import { ErrorDto } from './error.dto';
import { Either } from '@sweet-monads/either';

export interface ResDto {
  payload?: any;
}

export function eitherToDto<L extends ErrorDto, R>(
  e: Either<L, R>,
): {
  payload?: R;
} & {
  [R in L['name']]: L;
} {
  const res: any = {
  };
  e.mapRight(r => (res.payload = r)).mapLeft(e => {
    res[e.name] = e;
  });
  return res;
}
