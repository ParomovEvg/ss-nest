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
class LoginDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String }, phone: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginDto.prototype, "phone", void 0);
exports.LoginDto = LoginDto;
class LoginResPayload {
    static _OPENAPI_METADATA_FACTORY() {
        return { access_token: { required: true, type: () => String } };
    }
}
exports.LoginResPayload = LoginResPayload;
class LoginResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: true, type: () => require("./auth.dto").LoginResPayload } };
    }
}
exports.LoginResDto = LoginResDto;
//# sourceMappingURL=auth.dto.js.map