"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const img_controller_1 = require("./img.controller");
const img_service_1 = require("./img.service");
const typeorm_1 = require("@nestjs/typeorm");
const content_img_field_entity_1 = require("./content-img-field.entity");
const content_img_entity_1 = require("./content-img.entity");
const screen_module_1 = require("../screen/screen.module");
let ImgModule = class ImgModule {
};
ImgModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([content_img_field_entity_1.ContentImgField, content_img_entity_1.ContentImg]),
            common_1.forwardRef(() => screen_module_1.ScreenModule),
        ],
        controllers: [img_controller_1.ImgController],
        providers: [img_service_1.ImgService],
        exports: [img_service_1.ImgService],
    })
], ImgModule);
exports.ImgModule = ImgModule;
//# sourceMappingURL=img.module.js.map