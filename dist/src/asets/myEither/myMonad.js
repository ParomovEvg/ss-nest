"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("@sweet-monads/either");
class AsyncEither {
    constructor(eitherPromise) {
        this.eitherPromise = eitherPromise;
    }
    chain(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.chain(f)));
    }
    asyncChain(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.asyncChain(f)));
    }
    isLeft() {
        return this.eitherPromise.then(e => e.isLeft());
    }
    isRight() {
        return this.eitherPromise.then(e => e.isRight());
    }
    mapRight(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.map(f)));
    }
    mapLeft(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.mapLeft(f)));
    }
    map(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.map(f)));
    }
    asyncMap(f) {
        return new AsyncEither(this.eitherPromise.then(e => e.asyncMap(f)));
    }
    run() {
        return this.eitherPromise;
    }
}
exports.AsyncEither = AsyncEither;
exports.emptyAsyncEither = new AsyncEither(Promise.resolve(either_1.right(null)));
//# sourceMappingURL=myMonad.js.map