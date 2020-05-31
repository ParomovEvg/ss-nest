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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const checkout_service_1 = require("./checkout.service");
const eitherToDto_1 = require("../../asets/eitherToDto");
const swagger_1 = require("@nestjs/swagger");
const checkout_dto_1 = require("./checkout.dto");
let CheckoutController = class CheckoutController {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    async findCheckout(fn) {
        return eitherToDto_1.eitherToDto(await this.checkoutService.findCheckout(fn));
    }
    async findAllCheckout() {
        return eitherToDto_1.eitherToDto(await this.checkoutService.getAll());
    }
    async createCheckout(createCheckoutDto) {
        return eitherToDto_1.eitherToDto(await this.checkoutService.createCheckoutAndSave(createCheckoutDto));
    }
    async deleteCheckout(checkoutId) {
        return eitherToDto_1.eitherToDto(await this.checkoutService.deleteCheckout(checkoutId));
    }
    async getQrsOfCheckout(checkoutId) {
        return {};
    }
};
__decorate([
    common_1.Get(':fn'),
    openapi.ApiResponse({ status: 200, type: require("./checkout.dto").FindCheckoutResDto }),
    __param(0, common_1.Param('fn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "findCheckout", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: require("./checkout.dto").FindAllCheckoutsResDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "findAllCheckout", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./checkout.dto").CreateCheckoutResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkout_dto_1.CreateCheckoutDto]),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "createCheckout", null);
__decorate([
    common_1.Delete(':checkoutId'),
    swagger_1.ApiParam({ name: 'checkoutId', type: 'number' }),
    openapi.ApiResponse({ status: 200, type: require("./checkout.dto").DeleteCheckoutResDto }),
    __param(0, common_1.Param('checkoutId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "deleteCheckout", null);
__decorate([
    common_1.Get(':checkoutId/qrs'),
    openapi.ApiResponse({ status: 200, type: require("./checkout.dto").FindQrsOfCheckoutResDto }),
    __param(0, common_1.Param('checkoutId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "getQrsOfCheckout", null);
CheckoutController = __decorate([
    swagger_1.ApiTags('Checkout'),
    common_1.Controller('checkout'),
    __metadata("design:paramtypes", [checkout_service_1.CheckoutService])
], CheckoutController);
exports.CheckoutController = CheckoutController;
//# sourceMappingURL=checkout.controller.js.map