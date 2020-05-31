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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const content_service_1 = require("./content.service");
let ContentController = class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    async getContent() {
        return {
            payload: await this.contentService.getContent(),
        };
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiBadRequestResponse(),
    openapi.ApiResponse({ status: 200, type: require("./content.dto").GetContentResDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "getContent", null);
ContentController = __decorate([
    swagger_1.ApiTags('Content'),
    common_1.Controller('content'),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
exports.ContentController = ContentController;
//# sourceMappingURL=content.controller.js.map