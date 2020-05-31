"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const screen_controller_1 = require("./screen.controller");
const screen_service_1 = require("./screen.service");
const typeorm_1 = require("@nestjs/typeorm");
const content_screen_entity_1 = require("./content-screen.entity");
const text_module_1 = require("../text/text.module");
const img_module_1 = require("../img/img.module");
const md_module_1 = require("../md/md.module");
let ScreenModule = class ScreenModule {
};
ScreenModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([content_screen_entity_1.ContentScreen]),
            img_module_1.ImgModule,
            md_module_1.MdModule,
            text_module_1.TextModule,
        ],
        controllers: [screen_controller_1.ScreenController],
        providers: [screen_service_1.ScreenService],
        exports: [screen_service_1.ScreenService],
    })
], ScreenModule);
exports.ScreenModule = ScreenModule;
//# sourceMappingURL=screen.module.js.map