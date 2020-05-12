import { Either, right } from '@sweet-monads/either';

export class AsyncEither<L, R> {
  constructor(public eitherPromise: Promise<Either<L, R>>) {}

  chain<A, B>(f: (r: R) => Either<A, B>): AsyncEither<A | L, B> {
    return new AsyncEither(this.eitherPromise.then(e => e.chain(f)));
  }
  asyncChain<A, B>(f: (r: R) => Promise<Either<A, B>>): AsyncEither<A | L, B> {
    return new AsyncEither(this.eitherPromise.then(e => e.asyncChain(f)));
  }
  isLeft(): Promise<boolean> {
    return this.eitherPromise.then(e => e.isLeft());
  }

  isRight(): Promise<boolean> {
    return this.eitherPromise.then(e => e.isRight());
  }

  mapRight<T>(f: (r: R) => T): AsyncEither<L, T> {
    return new AsyncEither(this.eitherPromise.then(e => e.map(f)));
  }

  mapLeft<T>(f: (l: L) => T): AsyncEither<T, R> {
    return new AsyncEither(this.eitherPromise.then(e => e.mapLeft(f)));
  }

  map<T>(f: (r: R) => T): AsyncEither<L, T> {
    return new AsyncEither(this.eitherPromise.then(e => e.map(f)));
  }
  asyncMap<T>(f: (r: R) => Promise<T>): AsyncEither<L, T> {
    return new AsyncEither(this.eitherPromise.then(e => e.asyncMap(f)));
  }
  run(): Promise<Either<L, R>> {
    return this.eitherPromise;
  }
}

export const emptyAsyncEither = new AsyncEither<any, null>(
  Promise.resolve(right(null)),
);
