"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const content_controller_1 = require("./content.controller");
const content_service_1 = require("./content.service");
const typeorm_1 = require("@nestjs/typeorm");
const content_text_entity_1 = require("./text/content-text.entity");
const content_img_entity_1 = require("./img/content-img.entity");
const content_md_entity_1 = require("./md/content-md.entity");
const content_text_field_entity_1 = require("./text/content-text-field.entity");
const content_img_field_entity_1 = require("./img/content-img-field.entity");
const content_md_field_entity_1 = require("./md/content-md-field.entity");
const content_screen_entity_1 = require("./screen/content-screen.entity");
const screen_controller_1 = require("./screen/screen.controller");
const img_controller_1 = require("./img/img.controller");
const md_controller_1 = require("./md/md.controller");
const text_controller_1 = require("./text/text.controller");
const screen_service_1 = require("./screen/screen.service");
const text_service_1 = require("./text/text.service");
const img_service_1 = require("./img/img.service");
const md_service_1 = require("./md/md.service");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                content_text_entity_1.ContentText,
                content_img_entity_1.ContentImg,
                content_md_entity_1.ContentMd,
                content_text_field_entity_1.ContentTextField,
                content_img_field_entity_1.ContentImgField,
                content_md_field_entity_1.ContentMdField,
                content_screen_entity_1.ContentScreen,
            ]),
        ],
        controllers: [
            content_controller_1.ContentController,
            screen_controller_1.ScreenController,
            img_controller_1.ImgController,
            md_controller_1.MdController,
            text_controller_1.TextController,
        ],
        providers: [
            content_service_1.ContentService,
            screen_service_1.ScreenService,
            text_service_1.TextService,
            img_service_1.ImgService,
            md_service_1.MdService,
        ],
    })
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map