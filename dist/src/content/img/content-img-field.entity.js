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
const content_img_entity_1 = require("./content-img.entity");
const content_screen_entity_1 = require("../screen/content-screen.entity");
let ContentImgField = class ContentImgField {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, img: { required: true, type: () => [require("./content-img.entity").ContentImg] }, screen: { required: true, type: () => require("../screen/content-screen.entity").ContentScreen } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContentImgField.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], ContentImgField.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: '', type: 'varchar' }),
    __metadata("design:type", String)
], ContentImgField.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_img_entity_1.ContentImg, img => img.field),
    __metadata("design:type", Array)
], ContentImgField.prototype, "img", void 0);
__decorate([
    typeorm_1.ManyToOne(type => content_screen_entity_1.ContentScreen),
    __metadata("design:type", content_screen_entity_1.ContentScreen)
], ContentImgField.prototype, "screen", void 0);
ContentImgField = __decorate([
    typeorm_1.Entity()
], ContentImgField);
exports.ContentImgField = ContentImgField;
//# sourceMappingURL=content-img-field.entity.js.map