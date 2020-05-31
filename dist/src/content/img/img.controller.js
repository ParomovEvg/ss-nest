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
const img_dto_1 = require("./img.dto");
const eitherToDto_1 = require("../../asets/eitherToDto");
const img_service_1 = require("./img.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const api_implicit_file_decorator_1 = require("@nestjs/swagger/dist/decorators/api-implicit-file.decorator");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const lodash_1 = require("lodash");
let ImgController = class ImgController {
    constructor(imgService) {
        this.imgService = imgService;
    }
    async createImgField({ name, screenId }) {
        return eitherToDto_1.eitherToDto(await this.imgService.createImgField(screenId, name));
    }
    async deleteImgField(fieldId) {
        return eitherToDto_1.eitherToDto(await this.imgService.deleteImgField(fieldId));
    }
    async findFieldById(fieldId) {
        return eitherToDto_1.eitherToDto(await this.imgService.findFiledById(fieldId));
    }
    async uploadFile(file, fieldId) {
        return eitherToDto_1.eitherToDto(await this.imgService.createImg(fieldId, file.path));
    }
    async getImgBefore(filedId, imgId) {
        return eitherToDto_1.eitherToDto(await this.imgService.getImageBefore(filedId, imgId));
    }
    async saveImgBefore(saveImgLastDto) {
        return eitherToDto_1.eitherToDto(await this.imgService.saveImgLast(saveImgLastDto.imgId));
    }
};
__decorate([
    common_1.Post('field'),
    openapi.ApiResponse({ status: 201, type: require("./img.dto").CreateImgFieldResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [img_dto_1.CreateImgFieldDto]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "createImgField", null);
__decorate([
    common_1.Delete('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: require("./img.dto").DeleteImgFieldResDto }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "deleteImgField", null);
__decorate([
    common_1.Get('field/:fieldId'),
    openapi.ApiResponse({ status: 200, type: require("./img.dto").FindImgFieldByIdResDto }),
    __param(0, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "findFieldById", null);
__decorate([
    common_1.Post('field/:fieldId/value'),
    swagger_1.ApiConsumes('multipart/form-data'),
    api_implicit_file_decorator_1.ApiImplicitFile({ name: 'file', required: true }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file1, callback) => {
                const ext = lodash_1.last(file1.originalname.split('.'));
                callback(null, uuid_1.v4() + '.' + ext);
            },
        }),
    })),
    openapi.ApiResponse({ status: 201, type: require("./img.dto").CreateImgResDto }),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Param('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "uploadFile", null);
__decorate([
    common_1.Get('field/:fieldId/value/:imgId/before'),
    openapi.ApiResponse({ status: 200, type: require("./img.dto").GetImgBeforeResDto }),
    __param(0, common_1.Param('fieldId')),
    __param(1, common_1.Param('imgId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "getImgBefore", null);
__decorate([
    common_1.Post('value/before'),
    openapi.ApiResponse({ status: 201, type: require("./img.dto").SaveImgLastResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [img_dto_1.SaveImgLastDto]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "saveImgBefore", null);
ImgController = __decorate([
    common_1.Controller('img'),
    __metadata("design:paramtypes", [img_service_1.ImgService])
], ImgController);
exports.ImgController = ImgController;
//# sourceMappingURL=img.controller.js.map