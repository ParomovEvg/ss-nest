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
const screen_dto_1 = require("./screen.dto");
const eitherToDto_1 = require("../../asets/eitherToDto");
const screen_service_1 = require("./screen.service");
const swagger_1 = require("@nestjs/swagger");
let ScreenController = class ScreenController {
    constructor(screenService) {
        this.screenService = screenService;
    }
    async createScreen(createScreenDto) {
        return eitherToDto_1.eitherToDto(await this.screenService.createScreen(createScreenDto));
    }
    async findAllScreens() {
        return { payload: await this.screenService.findAll() };
    }
    async findScreenById(screenId) {
        return eitherToDto_1.eitherToDto(await this.screenService.getScreenById(screenId));
    }
    async deleteScreenById(screenId) {
        return eitherToDto_1.eitherToDto(await this.screenService.deleteScreen(screenId));
    }
    async changeScreenName(screenId, changeScreenNameDto) {
        return eitherToDto_1.eitherToDto(await this.screenService.changeScreenName(screenId, changeScreenNameDto));
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./screen.dto").CreateScreenResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screen_dto_1.CreateScreenDto]),
    __metadata("design:returntype", Promise)
], ScreenController.prototype, "createScreen", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: require("./screen.dto").FindAllScreensResDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScreenController.prototype, "findAllScreens", null);
__decorate([
    common_1.Get(':screenId'),
    openapi.ApiResponse({ status: 200, type: require("./screen.dto").FindScreenByIdResDto }),
    __param(0, common_1.Param('screenId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScreenController.prototype, "findScreenById", null);
__decorate([
    common_1.Delete(':screenId'),
    openapi.ApiResponse({ status: 200, type: require("./screen.dto").DeleteScreenResDto }),
    __param(0, common_1.Param('screenId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScreenController.prototype, "deleteScreenById", null);
__decorate([
    common_1.Put(':screenId'),
    openapi.ApiResponse({ status: 200, type: require("./screen.dto").ChangeScreenNameResDto }),
    __param(0, common_1.Param('screenId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, screen_dto_1.ChangeScreenNameDto]),
    __metadata("design:returntype", Promise)
], ScreenController.prototype, "changeScreenName", null);
ScreenController = __decorate([
    swagger_1.ApiTags('Content'),
    common_1.Controller('screen'),
    __metadata("design:paramtypes", [screen_service_1.ScreenService])
], ScreenController);
exports.ScreenController = ScreenController;
//# sourceMappingURL=screen.controller.js.map