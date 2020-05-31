import { Either } from '@sweet-monads/either';
export declare class AsyncEither<L, R> {
    eitherPromise: Promise<Either<L, R>>;
    constructor(eitherPromise: Promise<Either<L, R>>);
    chain<A, B>(f: (r: R) => Either<A, B>): AsyncEither<A | L, B>;
    asyncChain<A, B>(f: (r: R) => Promise<Either<A, B>>): AsyncEither<A | L, B>;
    isLeft(): Promise<boolean>;
    isRight(): Promise<boolean>;
    mapRight<T>(f: (r: R) => T): AsyncEither<L, T>;
    mapLeft<T>(f: (l: L) => T): AsyncEither<T, R>;
    map<T>(f: (r: R) => T): AsyncEither<L, T>;
    asyncMap<T>(f: (r: R) => Promise<T>): AsyncEither<L, T>;
    run(): Promise<Either<L, R>>;
}
export declare const emptyAsyncEither: AsyncEither<any, null>;
