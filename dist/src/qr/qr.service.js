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
const qr_entity_1 = require("./qr.entity");
const typeorm_2 = require("typeorm");
const checkout_service_1 = require("./checkout/checkout.service");
const useful_monads_1 = require("useful-monads");
const qr_errors_dto_1 = require("./qr.errors.dto");
const draw_service_1 = require("./draw/draw.service");
const EitherAsync_1 = require("useful-monads/EitherAsync");
const phone_service_1 = require("../auth/phone/phone.service");
let QrService = class QrService {
    constructor(qrRepository, checkoutService, drawService, phoneService) {
        this.qrRepository = qrRepository;
        this.checkoutService = checkoutService;
        this.drawService = drawService;
        this.phoneService = phoneService;
    }
    async findAllBy(where) {
        return await this.qrRepository.find({ where, relations: ['phone'] });
    }
    async createQr(createQrDto, phone) {
        return EitherAsync_1.EitherAsync.from(this.checkQr(createQrDto.fp, createQrDto.fd))
            .asyncChain(() => this.drawService.findNowDraw())
            .asyncChain(draw => this.checkSalary(draw, createQrDto.s))
            .asyncChain(draw => this.checkQrRegistrationLimit(draw, phone))
            .asyncChain(async (draw) => this.checkoutService
            .findCheckout(createQrDto.fn)
            .then(r => r.map(checkout => ({ draw, checkout }))))
            .asyncMap(async ({ draw, checkout }) => {
            const qr = this.qrRepository.create(createQrDto);
            qr.phone = phone;
            qr.draw = draw;
            qr.checkout = checkout;
            const qrRes = await this.qrRepository.save(qr);
            const qrDto = Object.assign(Object.assign({}, qrRes), { time: qrRes.time.toISOString() });
            return qrDto;
        })
            .run();
    }
    async checkQrRegistrationLimit(draw, phone) {
        const qrs = await this.qrRepository.find({ phone: phone });
        let ageLimit = Date.now() - draw.qrLimitPeriodMS;
        if (draw.qrLimitPeriodMS == 0) {
            ageLimit = +draw.start;
        }
        let allowedNumber = draw.qrLimit;
        if (draw.qrLimit == 0) {
            allowedNumber = Infinity;
        }
        const qrsInTimeLimit = qrs.filter(qr => {
            const time = +qr.time;
            return time > ageLimit;
        });
        const canAddQr = qrsInTimeLimit.length < allowedNumber;
        if (canAddQr) {
            return useful_monads_1.right(draw);
        }
        else {
            let nextTime;
            if (draw.qrLimitPeriodMS == 0) {
                nextTime = new Date(draw.end).toISOString();
            }
            else {
                nextTime = new Date(+qrsInTimeLimit[0].time + +draw.qrLimitPeriodMS).toISOString();
            }
            return useful_monads_1.left(qr_errors_dto_1.createQrRegistrationLimitExceeded({
                nextTime,
                qrLimit: draw.qrLimit,
                phone: phone.phone,
            }));
        }
    }
    async checkSalary(draw, s) {
        if (draw.sLimit > s) {
            return useful_monads_1.left(qr_errors_dto_1.createQrSalaryNotEnough({ s, sLimit: draw.sLimit }));
        }
        else {
            return useful_monads_1.right(draw);
        }
    }
    async checkQr(fp, fd) {
        const qr = await this.qrRepository.findOne({ where: { fd, fp } });
        if (qr) {
            return useful_monads_1.left(qr_errors_dto_1.createQrAlreadyExists({ fd, fp }));
        }
        else {
            return useful_monads_1.right(true);
        }
    }
    async getQrNum(phone) {
        return EitherAsync_1.EitherAsync.from(this.phoneService.findPhone(phone))
            .asyncMap(async (phone) => {
            const num = await this.qrRepository.count({ where: { phone } });
            return String(num);
        })
            .orDefault('0');
    }
};
QrService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(qr_entity_1.Qr)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        checkout_service_1.CheckoutService,
        draw_service_1.DrawService,
        phone_service_1.PhoneService])
], QrService);
exports.QrService = QrService;
//# sourceMappingURL=qr.service.js.map