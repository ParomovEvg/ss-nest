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
const checkout_entity_1 = require("./checkout/checkout.entity");
const draw_entity_1 = require("./draw/draw.entity");
const phone_entity_1 = require("../auth/phone/phone.entity");
let Qr = class Qr {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, phone: { required: true, type: () => require("../auth/phone/phone.entity").Phone }, checkout: { required: true, type: () => require("./checkout/checkout.entity").Checkout }, draw: { required: true, type: () => require("./draw/draw.entity").Draw }, fp: { required: true, type: () => String }, fd: { required: true, type: () => String }, s: { required: true, type: () => Number }, time: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Qr.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => phone_entity_1.Phone, phone => phone.phoneQrs, { eager: true }),
    __metadata("design:type", phone_entity_1.Phone)
], Qr.prototype, "phone", void 0);
__decorate([
    typeorm_1.ManyToOne(type => checkout_entity_1.Checkout, checkout => checkout.checkoutQrs, { eager: true }),
    __metadata("design:type", checkout_entity_1.Checkout)
], Qr.prototype, "checkout", void 0);
__decorate([
    typeorm_1.ManyToOne(type => draw_entity_1.Draw, draw => draw.drawQrs),
    __metadata("design:type", draw_entity_1.Draw)
], Qr.prototype, "draw", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Qr.prototype, "fp", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Qr.prototype, "fd", void 0);
__decorate([
    typeorm_1.Column('bigint'),
    __metadata("design:type", Number)
], Qr.prototype, "s", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Qr.prototype, "time", void 0);
Qr = __decorate([
    typeorm_1.Entity()
], Qr);
exports.Qr = Qr;
//# sourceMappingURL=qr.entity.js.map