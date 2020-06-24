import { Checkout } from './checkout.entity';
import { Repository } from 'typeorm';
import { CreateCheckoutDto, DeleteCheckoutResDto } from './checkout.dto';
import { CheckoutNotFoundByFn, CheckoutNotFoundById } from './checkout.errors.dto';
import { CreateQrDto } from '../qr.dto';
import { Either } from 'useful-monads';
declare type FnAble = string | Checkout | CreateCheckoutDto | CreateQrDto;
export declare class CheckoutService {
    private checkoutRepository;
    constructor(checkoutRepository: Repository<Checkout>);
    findCheckout(checkoutSrc: FnAble): Promise<Either<CheckoutNotFoundByFn, Checkout>>;
    getAll(): Promise<Either<null, Checkout[]>>;
    createCheckout(createCheckoutDto: CreateCheckoutDto): Checkout;
    createCheckoutAndSave(createCheckoutDto: CreateCheckoutDto): Promise<Either<any, Checkout>>;
    deleteCheckout(id: number): Promise<Either<CheckoutNotFoundById, DeleteCheckoutResDto['payload']>>;
    private extractFn;
    findCheckoutByCkecoutId(id?: number): Promise<Either<CheckoutNotFoundById, Checkout>>;
}
export {};
