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
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const phone_service_1 = require("../phone/phone.service");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let JwtAdminStrategy = class JwtAdminStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt-admin') {
    constructor(phoneService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
        this.phoneService = phoneService;
    }
    async validate(payload) {
        const res = await EitherAsync_1.EitherAsync.from(this.phoneService.findPhone(payload.phone)).extract();
        if (res.left) {
            throw res.left;
        }
        else if (res.right && res.right.isAdmin) {
            return res.right;
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
JwtAdminStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [phone_service_1.PhoneService])
], JwtAdminStrategy);
exports.JwtAdminStrategy = JwtAdminStrategy;
//# sourceMappingURL=jwt-admin.strategy.js.map