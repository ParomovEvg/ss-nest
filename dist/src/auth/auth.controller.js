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
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const phone_service_1 = require("./phone/phone.service");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const eitherToDto_1 = require("../asets/eitherToDto");
const swagger_1 = require("@nestjs/swagger");
const phone_dto_1 = require("./phone/phone.dto");
const auth_dto_1 = require("./auth.dto");
let AuthController = class AuthController {
    constructor(phoneService, authService) {
        this.phoneService = phoneService;
        this.authService = authService;
    }
    async login(req, loginDto) {
        return {
            payload: await this.authService.login(req.user),
        };
    }
    getProfile(req) {
        return req.user;
    }
    async createUser(phoneDto) {
        return { payload: await this.phoneService.createPhone(phoneDto) };
    }
    async addPassword(req) {
        const phone = await this.phoneService.addPassword(req.user);
        return eitherToDto_1.eitherToDto(phone.map(password => password.phone));
    }
};
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./auth.dto").LoginResDto }),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('profile'),
    openapi.ApiResponse({ status: 200, type: require("./phone/phone.dto").FlatPhoneDto }),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", phone_dto_1.FlatPhoneDto)
], AuthController.prototype, "getProfile", null);
__decorate([
    common_1.Post('phone'),
    openapi.ApiResponse({ status: 201, type: require("./phone/phone.dto").CreatePhoneResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('password'),
    openapi.ApiResponse({ status: 201, type: require("./password/password.dto").CreatePasswordResDto }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addPassword", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [phone_service_1.PhoneService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map