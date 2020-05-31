"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const md_controller_1 = require("./md.controller");
const md_service_1 = require("./md.service");
const typeorm_1 = require("@nestjs/typeorm");
const content_md_field_entity_1 = require("./content-md-field.entity");
const content_md_entity_1 = require("./content-md.entity");
const screen_module_1 = require("../screen/screen.module");
let MdModule = class MdModule {
};
MdModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([content_md_field_entity_1.ContentMdField, content_md_entity_1.ContentMd]),
            common_1.forwardRef(() => screen_module_1.ScreenModule),
        ],
        controllers: [md_controller_1.MdController],
        providers: [md_service_1.MdService],
        exports: [md_service_1.MdService],
    })
], MdModule);
exports.MdModule = MdModule;
//# sourceMappingURL=md.module.js.map