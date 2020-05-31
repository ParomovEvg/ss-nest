"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const text_service_1 = require("./text.service");
const text_controller_1 = require("./text.controller");
const typeorm_1 = require("@nestjs/typeorm");
const content_text_field_entity_1 = require("./content-text-field.entity");
const content_text_entity_1 = require("./content-text.entity");
const screen_module_1 = require("../screen/screen.module");
let TextModule = class TextModule {
};
TextModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([content_text_field_entity_1.ContentTextField, content_text_entity_1.ContentText]),
            common_1.forwardRef(() => screen_module_1.ScreenModule),
        ],
        providers: [text_service_1.TextService],
        controllers: [text_controller_1.TextController],
        exports: [text_service_1.TextService],
    })
], TextModule);
exports.TextModule = TextModule;
//# sourceMappingURL=text.module.js.map