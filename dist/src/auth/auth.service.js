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
const common_1 = require("@nestjs/common");
const phone_service_1 = require("./phone/phone.service");
const password_service_1 = require("./password/password.service");
const jwt_1 = require("@nestjs/jwt");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let AuthService = class AuthService {
    constructor(phoneService, passwordService, jwtService) {
        this.phoneService = phoneService;
        this.passwordService = passwordService;
        this.jwtService = jwtService;
    }
    async validate(loginDto) {
        return EitherAsync_1.EitherAsync.from(this.phoneService.findPhone(loginDto))
            .asyncChain(phone => this.passwordService.checkPhonePassword(phone, loginDto))
            .run();
    }
    async login(phone) {
        const payload = { phone: phone.phone, sub: phone.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [phone_service_1.PhoneService,
        password_service_1.PasswordService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map