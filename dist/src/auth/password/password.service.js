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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const password_entity_1 = require("./password.entity");
const password_errors_dto_1 = require("./password.errors.dto");
const useful_monads_1 = require("useful-monads");
let PasswordService = class PasswordService {
    constructor(passwordRepository) {
        this.passwordRepository = passwordRepository;
        this.saltRounds = 10;
    }
    async createPassword(passwordSrc, phone) {
        const passwordString = this.extractPassword(passwordSrc);
        const password = this.passwordRepository.create();
        password.phone = phone;
        password.password = await bcrypt_1.hash(passwordString, this.saltRounds);
        return password;
    }
    async createAndSavePassword(passwordString, phone) {
        const password = await this.createPassword(passwordString, phone);
        await this.passwordRepository.save(password);
        return password;
    }
    async checkPhonePassword(phone, password) {
        const passwordString = this.extractPassword(password);
        const passwords = await this.passwordRepository.find({
            where: { phone: phone },
        });
        if (passwords.length === 0) {
            return useful_monads_1.left(password_errors_dto_1.createPasswordsOfPhoneNotFound({ phone: phone.phone }));
        }
        const isValid = await Promise.all(passwords.map(password => {
            return this.checkPassword(passwordString, password);
        })).then(phones => phones.some(e => e));
        return useful_monads_1.right(isValid ? phone : null);
    }
    async checkPassword(passwordString, password) {
        return bcrypt_1.compare(passwordString, password.password);
    }
    extractPassword(password) {
        let passwordString;
        if (typeof password === 'string') {
            passwordString = password;
        }
        else {
            passwordString = password === null || password === void 0 ? void 0 : password.password;
        }
        return passwordString;
    }
};
PasswordService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(password_entity_1.Password)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PasswordService);
exports.PasswordService = PasswordService;
//# sourceMappingURL=password.service.js.map