import { ErrorDto } from './error.dto';
import { Either } from 'useful-monads';
export interface ResDto {
    payload?: any;
}
export declare function eitherToDto<L extends ErrorDto, R>(e: Either<L, R>): {
    payload?: R;
} & {
    [R in L['name']]: L;
};
