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
const draw_dto_1 = require("./draw.dto");
const draw_service_1 = require("./draw.service");
const eitherToDto_1 = require("../../asets/eitherToDto");
const swagger_1 = require("@nestjs/swagger");
let DrawController = class DrawController {
    constructor(drawService) {
        this.drawService = drawService;
    }
    async findAll() {
        return {
            payload: (await this.drawService.findAllDraw()).map(this.drawService.mapDrawToFlatDraw),
        };
    }
    async findDrawWithQrs(findFullDrawDto) {
        return eitherToDto_1.eitherToDto((await this.drawService.findDraw(findFullDrawDto)).map(this.drawService.mapDrawToFullDraw));
    }
    async findNow() {
        return eitherToDto_1.eitherToDto((await this.drawService.findNowDraw()).map(this.drawService.mapDrawToFlatDraw));
    }
    async createDraw(createDrawDto) {
        return eitherToDto_1.eitherToDto((await this.drawService.createDraw(createDrawDto)).map(this.drawService.mapDrawToFlatDraw));
    }
    async createDrawNext(createDrawNextDto) {
        return eitherToDto_1.eitherToDto((await this.drawService.createNextDraw(createDrawNextDto)).map(this.drawService.mapDrawToFlatDraw));
    }
    async deleteDraw(deleteDrawDto) {
        return eitherToDto_1.eitherToDto(await this.drawService.deleteDraw(deleteDrawDto.id));
    }
    async changeDrawSalary(changeDrawSalaryLimitDto, id) {
        return eitherToDto_1.eitherToDto((await this.drawService.changeDraw(changeDrawSalaryLimitDto, id)).map(this.drawService.mapDrawToFlatDraw));
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: require("./draw.dto").FindAllDrawResDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./draw.dto").FindFullDrawResDto }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [draw_dto_1.FindFullDrawDto]),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "findDrawWithQrs", null);
__decorate([
    common_1.Get('now'),
    openapi.ApiResponse({ status: 200, type: require("./draw.dto").FindNowDrawResDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "findNow", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./draw.dto").CreateDrawResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [draw_dto_1.CreateDrawDto]),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "createDraw", null);
__decorate([
    common_1.Post('next'),
    openapi.ApiResponse({ status: 201, type: require("./draw.dto").CreateDrawResDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [draw_dto_1.CreateDrawNextDto]),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "createDrawNext", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./draw.dto").DeleteDrawResDto }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [draw_dto_1.DeleteDrawDto]),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "deleteDraw", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./draw.dto").ChangeDrawResDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [draw_dto_1.ChangeDrawDto, Number]),
    __metadata("design:returntype", Promise)
], DrawController.prototype, "changeDrawSalary", null);
DrawController = __decorate([
    swagger_1.ApiTags('Draw'),
    common_1.Controller('draw'),
    __metadata("design:paramtypes", [draw_service_1.DrawService])
], DrawController);
exports.DrawController = DrawController;
//# sourceMappingURL=draw.controller.js.map