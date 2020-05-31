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
const password_entity_1 = require("../password/password.entity");
const qr_entity_1 = require("../../qr/qr.entity");
let Phone = class Phone {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, phone: { required: true, type: () => String }, registrationDate: { required: true, type: () => String }, isAdmin: { required: true, type: () => Boolean }, passwords: { required: true, type: () => [require("../password/password.entity").Password] }, phoneQrs: { required: true, type: () => [require("../../qr/qr.entity").Qr] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Phone.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 11, unique: true }),
    __metadata("design:type", String)
], Phone.prototype, "phone", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Phone.prototype, "registrationDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean', default: false, }),
    __metadata("design:type", Boolean)
], Phone.prototype, "isAdmin", void 0);
__decorate([
    typeorm_1.OneToMany(type => password_entity_1.Password, password => password.phone),
    __metadata("design:type", Array)
], Phone.prototype, "passwords", void 0);
__decorate([
    typeorm_1.OneToMany(type => qr_entity_1.Qr, qr => qr.phone),
    __metadata("design:type", Array)
], Phone.prototype, "phoneQrs", void 0);
Phone = __decorate([
    typeorm_1.Entity()
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phone.entity.js.map