import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto, CreateCheckoutResDto, DeleteCheckoutResDto, FindAllCheckoutsResDto, FindCheckoutResDto, FindQrsOfCheckoutResDto } from './checkout.dto';
export declare class CheckoutController {
    private checkoutService;
    constructor(checkoutService: CheckoutService);
    findCheckout(fn: string): Promise<FindCheckoutResDto>;
    findAllCheckout(): Promise<FindAllCheckoutsResDto>;
    createCheckout(createCheckoutDto: CreateCheckoutDto): Promise<CreateCheckoutResDto>;
    deleteCheckout(checkoutId: number): Promise<DeleteCheckoutResDto>;
    getQrsOfCheckout(checkoutId: number): Promise<FindQrsOfCheckoutResDto>;
}
