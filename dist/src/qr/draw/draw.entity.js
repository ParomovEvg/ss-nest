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
const qr_entity_1 = require("../qr.entity");
let Draw = class Draw {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, start: { required: true, type: () => Date }, end: { required: true, type: () => Date }, description: { required: true, type: () => String }, sLimit: { required: true, type: () => Number }, qrLimit: { required: true, type: () => Number }, qrLimitPeriodMS: { required: true, type: () => Number }, drawQrs: { required: true, type: () => [require("../qr.entity").Qr] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Draw.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', default: null }),
    __metadata("design:type", Date)
], Draw.prototype, "start", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', default: null }),
    __metadata("design:type", Date)
], Draw.prototype, "end", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Draw.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Draw.prototype, "sLimit", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Draw.prototype, "qrLimit", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Draw.prototype, "qrLimitPeriodMS", void 0);
__decorate([
    typeorm_1.OneToMany(type => qr_entity_1.Qr, qr => qr.draw),
    __metadata("design:type", Array)
], Draw.prototype, "drawQrs", void 0);
Draw = __decorate([
    typeorm_1.Entity()
], Draw);
exports.Draw = Draw;
//# sourceMappingURL=draw.entity.js.map