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
var PhoneErrors;
(function (PhoneErrors) {
    PhoneErrors["PhoneAlreadyExists"] = "PhoneAlreadyExists";
    PhoneErrors["PhoneNotFound"] = "PhoneNotFound";
})(PhoneErrors = exports.PhoneErrors || (exports.PhoneErrors = {}));
class FlatPhoneDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, phone: { required: true, type: () => String } };
    }
}
exports.FlatPhoneDto = FlatPhoneDto;
class CreatePhoneDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { phone: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsMobilePhone('ru-RU'),
    __metadata("design:type", String)
], CreatePhoneDto.prototype, "phone", void 0);
exports.CreatePhoneDto = CreatePhoneDto;
class CreatePhoneResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: true, type: () => require("./phone.dto").FlatPhoneDto } };
    }
}
exports.CreatePhoneResDto = CreatePhoneResDto;
//# sourceMappingURL=phone.dto.js.map