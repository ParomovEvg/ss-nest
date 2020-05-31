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
const password_service_1 = require("../password/password.service");
const phone_entity_1 = require("./phone.entity");
const phone_errors_dto_1 = require("./phone.errors.dto");
const useful_monads_1 = require("useful-monads");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let PhoneService = class PhoneService {
    constructor(phoneRepository, passwordService, connection) {
        this.phoneRepository = phoneRepository;
        this.passwordService = passwordService;
        this.connection = connection;
    }
    async createPhone(createPhoneDto) {
        return EitherAsync_1.EitherAsync.from(this.phoneNotExists(createPhoneDto))
            .asyncMap(async () => {
            const phone = this.phoneRepository.create();
            phone.phone = createPhoneDto.phone;
            const password = await this.passwordService.createPassword(createPhoneDto.password, phone);
            await this.connection.transaction(async (manager) => {
                await manager.save(phone);
                await manager.save(password);
            });
            return Promise.resolve(phone);
        })
            .run();
    }
    async addPassword(phoneObj, password) {
        const phone = await this.findPhone(phoneObj);
        return phone
            .asyncMap(phone => {
            return this.passwordService.createAndSavePassword(password, phone);
        })
            .run();
    }
    async findPhone(phone) {
        const phoneNumber = this.extractPhoneNumber(phone);
        const phoneInstance = await this.phoneRepository.findOne({
            where: { phone: phoneNumber },
        });
        if (phoneInstance) {
            return useful_monads_1.right(phoneInstance);
        }
        return useful_monads_1.left(phone_errors_dto_1.createPhoneNotFound({ phone: phoneNumber }));
    }
    async phoneNotExists(phoneSrc) {
        const phoneNumber = this.extractPhoneNumber(phoneSrc);
        const phone = await this.phoneRepository.findOne({
            where: { phone: phoneNumber },
        });
        if (phone) {
            return useful_monads_1.left(phone_errors_dto_1.createPhoneAlreadyExists({ phone: phoneNumber }));
        }
        else {
            return useful_monads_1.right(true);
        }
    }
    extractPhoneNumber(phone) {
        if (typeof phone === 'string') {
            return phone;
        }
        else {
            return phone === null || phone === void 0 ? void 0 : phone.phone;
        }
    }
};
PhoneService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(phone_entity_1.Phone)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        password_service_1.PasswordService,
        typeorm_2.Connection])
], PhoneService);
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map