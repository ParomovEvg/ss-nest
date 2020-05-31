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
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var CheckoutErrors;
(function (CheckoutErrors) {
    CheckoutErrors["CheckoutNotFoundByFn"] = "CheckoutNotFoundByFn";
    CheckoutErrors["CheckoutNotFoundById"] = "CheckoutNotFoundById";
    CheckoutErrors["CheckoutAlreadyExists"] = "CheckoutAlreadyExists";
})(CheckoutErrors = exports.CheckoutErrors || (exports.CheckoutErrors = {}));
class FlatCheckoutDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, fn: { required: true, type: () => String }, address: { required: true, type: () => String } };
    }
}
exports.FlatCheckoutDto = FlatCheckoutDto;
class CreateCheckoutDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fn: { required: true, type: () => String }, address: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNumberString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateCheckoutDto.prototype, "fn", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCheckoutDto.prototype, "address", void 0);
exports.CreateCheckoutDto = CreateCheckoutDto;
class CreateCheckoutResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./checkout.dto").FlatCheckoutDto }, CheckoutAlreadyExists: { required: false, type: () => require("./checkout.errors.dto").CheckoutAlreadyExists } };
    }
}
exports.CreateCheckoutResDto = CreateCheckoutResDto;
class DeleteCheckoutResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ checkoutId: { required: true, type: () => Number } }) }, CheckoutNotFoundById: { required: false, type: () => require("./checkout.errors.dto").CheckoutNotFoundById } };
    }
}
exports.DeleteCheckoutResDto = DeleteCheckoutResDto;
class FindAllCheckoutsResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => [require("./checkout.dto").FlatCheckoutDto] } };
    }
}
exports.FindAllCheckoutsResDto = FindAllCheckoutsResDto;
class FindCheckoutResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { CheckoutNotFoundByFn: { required: false, type: () => require("./checkout.errors.dto").CheckoutNotFoundByFn }, payload: { required: false, type: () => require("./checkout.dto").FlatCheckoutDto } };
    }
}
exports.FindCheckoutResDto = FindCheckoutResDto;
class FindQrsOfCheckoutResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => [require("../qr.dto").FlatQrDto] }, CheckoutNotFoundByFn: { required: false, type: () => require("./checkout.errors.dto").CheckoutNotFoundByFn } };
    }
}
exports.FindQrsOfCheckoutResDto = FindQrsOfCheckoutResDto;
//# sourceMappingURL=checkout.dto.js.map