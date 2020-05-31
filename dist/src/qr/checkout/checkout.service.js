"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const checkout_entity_1 = require("./checkout.entity");
const typeorm_2 = require("typeorm");
const checkout_errors_dto_1 = require("./checkout.errors.dto");
const useful_monads_1 = require("useful-monads");
let CheckoutService = class CheckoutService {
    constructor(checkoutRepository) {
        this.checkoutRepository = checkoutRepository;
    }
    async findCheckout(checkoutSrc) {
        const fn = this.extractFn(checkoutSrc);
        const checkout = await this.checkoutRepository.findOne({ where: { fn } });
        if (checkout) {
            return useful_monads_1.right(checkout);
        }
        else {
            return useful_monads_1.left(checkout_errors_dto_1.createCheckoutNotFoundByFn({ fn }));
        }
    }
    async getAll() {
        return useful_monads_1.right(await this.checkoutRepository.find());
    }
    createCheckout(createCheckoutDto) {
        const checkout = this.checkoutRepository.create();
        checkout.fn = createCheckoutDto.fn;
        checkout.address = createCheckoutDto.address;
        return checkout;
    }
    async createCheckoutAndSave(createCheckoutDto) {
        let error;
        (await this.findCheckout(createCheckoutDto)).mapLeft(e => {
            error = e;
        });
        if (error) {
            const checkout = this.createCheckout(createCheckoutDto);
            return useful_monads_1.right(await this.checkoutRepository.save(checkout));
        }
        else {
            return useful_monads_1.left(checkout_errors_dto_1.createCheckoutAlreadyExist({ fn: createCheckoutDto.fn }));
        }
    }
    async deleteCheckout(id) {
        const checkout = await this.checkoutRepository.findOne({ where: { id } });
        if (checkout) {
            await this.checkoutRepository.delete(checkout);
            return useful_monads_1.right({ checkoutId: id });
        }
        else {
            return useful_monads_1.left(checkout_errors_dto_1.createCheckoutNotFoundById({ id }));
        }
    }
    extractFn(checkout) {
        if (typeof checkout === 'string') {
            return checkout;
        }
        else {
            return checkout.fn;
        }
    }
};
CheckoutService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(checkout_entity_1.Checkout)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CheckoutService);
exports.CheckoutService = CheckoutService;
//# sourceMappingURL=checkout.service.js.map