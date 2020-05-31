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
const draw_dto_1 = require("./draw/draw.dto");
const checkout_dto_1 = require("./checkout/checkout.dto");
var QrErrorsDto;
(function (QrErrorsDto) {
    QrErrorsDto["QrRegistrationLimitExceeded"] = "QrRegistrationLimitExceeded";
    QrErrorsDto["QrSalaryNotEnough"] = "QrSalaryNotEnough";
    QrErrorsDto["QrAlreadyExists"] = "QrAlreadyExists";
})(QrErrorsDto = exports.QrErrorsDto || (exports.QrErrorsDto = {}));
const EE = {
    DrawErrors: draw_dto_1.DrawErrors,
    CheckoutErrors: checkout_dto_1.CheckoutErrors,
};
class FlatQrDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, phone: { required: true, type: () => require("../auth/phone/phone.dto").FlatPhoneDto }, checkout: { required: true, type: () => require("./checkout/checkout.dto").FlatCheckoutDto }, fp: { required: true, type: () => String }, fd: { required: true, type: () => String }, s: { required: true, type: () => Number }, time: { required: true, type: () => String } };
    }
}
exports.FlatQrDto = FlatQrDto;
class CreateQrDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fn: { required: true, type: () => String }, fp: { required: true, type: () => String }, fd: { required: true, type: () => String }, s: { required: true, type: () => Number }, qrString: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateQrDto.prototype, "fn", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateQrDto.prototype, "fp", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateQrDto.prototype, "fd", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateQrDto.prototype, "s", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateQrDto.prototype, "qrString", void 0);
exports.CreateQrDto = CreateQrDto;
class CreateQrResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./qr.dto").FlatQrDto }, CheckoutNotFoundByFn: { required: false, type: () => require("./checkout/checkout.errors.dto").CheckoutNotFoundByFn }, NotDrawNow: { required: false, type: () => require("./draw/draw.errors.dto").NotDrawNow }, QrAlreadyExists: { required: false, type: () => require("./qr.errors.dto").QrAlreadyExists }, QrSalaryNotEnough: { required: false, type: () => require("./qr.errors.dto").QrSalaryNotEnough }, QrRegistrationLimitExceeded: { required: false, type: () => require("./qr.errors.dto").QrRegistrationLimitExceeded } };
    }
}
exports.CreateQrResDto = CreateQrResDto;
//# sourceMappingURL=qr.dto.js.map