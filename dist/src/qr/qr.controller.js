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
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const qr_dto_1 = require("./qr.dto");
const eitherToDto_1 = require("../asets/eitherToDto");
const qr_service_1 = require("./qr.service");
let QrController = class QrController {
    constructor(qrService) {
        this.qrService = qrService;
    }
    async addQr(createQrDto, req) {
        return eitherToDto_1.eitherToDto(await this.qrService.createQr(createQrDto, req.user));
    }
    async countQr(req) {
        return {
            payload: await this.qrService.getQrNum(req.user.phone),
        };
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./qr.dto").CreateQrResDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qr_dto_1.CreateQrDto, Object]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "addQr", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('count'),
    openapi.ApiResponse({ status: 200, type: require("./qr.dto").GetQrNumResDto }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "countQr", null);
QrController = __decorate([
    common_1.Controller('qr'),
    swagger_1.ApiTags('Qr'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [qr_service_1.QrService])
], QrController);
exports.QrController = QrController;
//# sourceMappingURL=qr.controller.js.map