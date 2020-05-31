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
class CreatePasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePasswordDto.prototype, "password", void 0);
exports.CreatePasswordDto = CreatePasswordDto;
var PasswordErrors;
(function (PasswordErrors) {
    PasswordErrors["PasswordsOfPhoneNotFound"] = "PasswordsOfPhoneNotFound";
})(PasswordErrors = exports.PasswordErrors || (exports.PasswordErrors = {}));
class CreatePasswordResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { PasswordsOfPhoneNotFound: { required: false, type: () => require("./password.errors.dto").PasswordsOfPhoneNotFound }, payload: { required: false, type: () => require("../phone/phone.dto").FlatPhoneDto } };
    }
}
exports.CreatePasswordResDto = CreatePasswordResDto;
//# sourceMappingURL=password.dto.js.map