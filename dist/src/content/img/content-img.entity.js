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
const content_img_field_entity_1 = require("./content-img-field.entity");
let ContentImg = class ContentImg {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, url: { required: true, type: () => String }, path: { required: true, type: () => String }, host: { required: true, type: () => String }, field: { required: true, type: () => require("./content-img-field.entity").ContentImgField } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContentImg.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ContentImg.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ContentImg.prototype, "path", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ContentImg.prototype, "host", void 0);
__decorate([
    typeorm_1.ManyToOne(type => content_img_field_entity_1.ContentImgField),
    __metadata("design:type", content_img_field_entity_1.ContentImgField)
], ContentImg.prototype, "field", void 0);
ContentImg = __decorate([
    typeorm_1.Entity()
], ContentImg);
exports.ContentImg = ContentImg;
//# sourceMappingURL=content-img.entity.js.map