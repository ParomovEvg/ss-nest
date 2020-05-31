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
const content_text_field_entity_1 = require("./content-text-field.entity");
let ContentText = class ContentText {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, value: { required: true, type: () => String }, createDate: { required: true, type: () => Date }, field: { required: true, type: () => require("./content-text-field.entity").ContentTextField } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContentText.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ContentText.prototype, "value", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ContentText.prototype, "createDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => content_text_field_entity_1.ContentTextField),
    __metadata("design:type", content_text_field_entity_1.ContentTextField)
], ContentText.prototype, "field", void 0);
ContentText = __decorate([
    typeorm_1.Entity()
], ContentText);
exports.ContentText = ContentText;
//# sourceMappingURL=content-text.entity.js.map