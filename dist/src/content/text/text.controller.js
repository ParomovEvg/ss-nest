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
const text_dto_1 = require("./text.dto");
const eitherToDto_1 = require("../../asets/eitherToDto");
const text_service_1 = require("./text.service");
const swagger_1 = require("@nestjs/swagger");
let TextController = class TextController {
    constructor(textService) {
        this.textService = textService;
    }
    async createField(createTextFieldDto) {
        return eitherToDto_1.eitherToDto(await this.textService.createField(createTextFieldDto));
    }
    async createText(createTextDto) {
        return eitherToDto_1.eitherToDto(await this.textService.createText(createTextDto));
    }
    async findTextOfFiled(fieldId) {
        return eitherToDto_1.eitherToDto(await this.textService.findTextFieldById(fieldId));
    }
    async deleteTextField(fieldId) {
        return eitherToDto_1.eitherToDto(await this.textService.deleteTextField(fieldId));
    }
};
__decorate([
    common_1.Post('field'),
    openapi.ApiResponse({ status: 201, type: require("./text.dto").CreateTextFieldResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [text_dto_1.CreateTextFieldDto]),
    __metadata("design:returntype", Promise)
], TextController.prototype, "createField", null);
__decorate([
    common_1.Post('value'),
    openapi.ApiResponse({ status: 201, type: require("./text.dto").CreateTextResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [text_dto_1.CreateTextDto]),
    __metadata("design:returntype", Promise)
], TextController.prototype, "createText", null);
__decorate([
    common_1.Get('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: require("./text.dto").FindTextOfFieldResDto }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TextController.prototype, "findTextOfFiled", null);
__decorate([
    common_1.Delete('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: require("./text.dto").DeleteTextFieldResDto }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TextController.prototype, "deleteTextField", null);
TextController = __decorate([
    swagger_1.ApiTags('Content'),
    common_1.Controller('text'),
    __metadata("design:paramtypes", [text_service_1.TextService])
], TextController);
exports.TextController = TextController;
//# sourceMappingURL=text.controller.js.map