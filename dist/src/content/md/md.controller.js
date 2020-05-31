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
const md_dto_1 = require("./md.dto");
const eitherToDto_1 = require("../../asets/eitherToDto");
const md_service_1 = require("./md.service");
let MdController = class MdController {
    constructor(mdService) {
        this.mdService = mdService;
    }
    async findMdField(fieldId) {
        return eitherToDto_1.eitherToDto(await this.mdService.findMdField(fieldId));
    }
    async createMdField(createMdField) {
        return eitherToDto_1.eitherToDto(await this.mdService.createMdField(createMdField));
    }
    async deleteMdField(fieldId) {
        return eitherToDto_1.eitherToDto(await this.mdService.deleteMdField(fieldId));
    }
    async createMd(createMdDto) {
        return eitherToDto_1.eitherToDto(await this.mdService.createMd(createMdDto));
    }
};
__decorate([
    common_1.Get('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MdController.prototype, "findMdField", null);
__decorate([
    common_1.Post('field'),
    openapi.ApiResponse({ status: 201, type: require("./md.dto").CreateMdFieldResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [md_dto_1.CreateMdFieldDto]),
    __metadata("design:returntype", Promise)
], MdController.prototype, "createMdField", null);
__decorate([
    common_1.Delete('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: require("./md.dto").DeleteMdFieldResDto }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MdController.prototype, "deleteMdField", null);
__decorate([
    common_1.Post('value'),
    openapi.ApiResponse({ status: 201, type: require("./md.dto").CreateMdResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [md_dto_1.CreateMdDto]),
    __metadata("design:returntype", Promise)
], MdController.prototype, "createMd", null);
MdController = __decorate([
    common_1.Controller('md'),
    __metadata("design:paramtypes", [md_service_1.MdService])
], MdController);
exports.MdController = MdController;
//# sourceMappingURL=md.controller.js.map