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
const typeorm_1 = require("typeorm");
const content_md_field_entity_1 = require("../md/content-md-field.entity");
const content_text_field_entity_1 = require("../text/content-text-field.entity");
const content_img_field_entity_1 = require("../img/content-img-field.entity");
let ContentScreen = class ContentScreen {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, textFields: { required: true, type: () => [require("../text/content-text-field.entity").ContentTextField] }, mdFields: { required: true, type: () => [require("../md/content-md-field.entity").ContentMdField] }, imgFields: { required: true, type: () => [require("../img/content-img-field.entity").ContentImgField] }, description: { required: true, type: () => String } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContentScreen.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], ContentScreen.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], ContentScreen.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_text_field_entity_1.ContentTextField, textField => textField.screen),
    __metadata("design:type", Array)
], ContentScreen.prototype, "textFields", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_md_field_entity_1.ContentMdField, textField => textField.screen),
    __metadata("design:type", Array)
], ContentScreen.prototype, "mdFields", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_img_field_entity_1.ContentImgField, textField => textField.screen),
    __metadata("design:type", Array)
], ContentScreen.prototype, "imgFields", void 0);
ContentScreen = __decorate([
    typeorm_1.Entity()
], ContentScreen);
exports.ContentScreen = ContentScreen;
//# sourceMappingURL=content-screen.entity.js.map