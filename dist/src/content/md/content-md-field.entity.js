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
const content_md_entity_1 = require("./content-md.entity");
const content_screen_entity_1 = require("../screen/content-screen.entity");
let ContentMdField = class ContentMdField {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, label: { required: true, type: () => String }, values: { required: true, type: () => [require("./content-md.entity").ContentMd] }, screen: { required: true, type: () => require("../screen/content-screen.entity").ContentScreen } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContentMdField.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ContentMdField.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ContentMdField.prototype, "label", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_md_entity_1.ContentMd, md => md.field),
    __metadata("design:type", Array)
], ContentMdField.prototype, "values", void 0);
__decorate([
    typeorm_1.ManyToOne(type => content_screen_entity_1.ContentScreen),
    __metadata("design:type", content_screen_entity_1.ContentScreen)
], ContentMdField.prototype, "screen", void 0);
ContentMdField = __decorate([
    typeorm_1.Entity()
], ContentMdField);
exports.ContentMdField = ContentMdField;
//# sourceMappingURL=content-md-field.entity.js.map