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
const draw_entity_1 = require("./draw.entity");
const typeorm_2 = require("typeorm");
const useful_monads_1 = require("useful-monads");
const draw_errors_dto_1 = require("./draw.errors.dto");
const date_service_1 = require("../date/date.service");
const qr_entity_1 = require("../qr.entity");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let DrawService = class DrawService {
    constructor(drawRepository, dateService, connection) {
        this.drawRepository = drawRepository;
        this.dateService = dateService;
        this.connection = connection;
    }
    findAllDraw() {
        return this.drawRepository.find();
    }
    async findNowDraw() {
        const draws = await this.findAllDraw();
        const draw = draws.find(draw => {
            const start = +draw.start;
            const end = +draw.end;
            const now = Date.now();
            return start < now && end > now;
        });
        if (draw) {
            return useful_monads_1.right(draw);
        }
        else {
            return useful_monads_1.left(draw_errors_dto_1.createNotDrawNow({ now: new Date().toISOString() }));
        }
    }
    async findDraw(findFullDrawDto) {
        const draw = await this.drawRepository.findOne({
            where: { id: findFullDrawDto.id },
            relations: ['drawQrs'],
        });
        if (draw) {
            return useful_monads_1.right(draw);
        }
        else {
            return useful_monads_1.left(draw_errors_dto_1.createDrawNotFoundById({ id: findFullDrawDto.id }));
        }
    }
    createDraw(createDrawDto) {
        return this.dateService
            .parseDateString(createDrawDto.start)
            .chain(start => this.dateService
            .parseDateString(createDrawDto.end)
            .map(end => [start, end]))
            .chain(([start, end]) => this.dateService.checkEndStartPosition(start, end))
            .asyncChain(async ([start, end]) => this.dateService.checkDateRangeAreFree(await this.findAllDraw(), start, end))
            .map(([start, end]) => {
            const draw = this.drawRepository.create();
            draw.start = start;
            draw.end = end;
            draw.description = createDrawDto.description;
            draw.sLimit = createDrawDto.sLimit;
            draw.qrLimit = createDrawDto.qrLimit;
            draw.qrLimitPeriodMS = createDrawDto.qrLimitPeriodMS;
            return draw;
        })
            .asyncMap(draw => this.drawRepository.save(draw))
            .run();
    }
    async createNextDraw(createDrawNextDto) {
        const draws = await this.findAllDraw();
        let startNum = draws.reduce((lastNum, nextDraw) => {
            const nextNum = +nextDraw.end;
            if (nextNum > lastNum) {
                return nextNum;
            }
            return lastNum;
        }, 0);
        if (startNum === 0) {
            startNum = Date.now();
        }
        const createDrawDto = Object.assign(Object.assign({}, createDrawNextDto), { start: new Date(startNum).toISOString() });
        return this.createDraw(createDrawDto);
    }
    async deleteDraw(id) {
        return EitherAsync_1.EitherAsync.from(this.findDraw({ id: id }))
            .asyncMap(async (draw) => {
            await this.connection.transaction(async (tm) => {
                if (draw.drawQrs.length) {
                    await tm.getRepository(qr_entity_1.Qr).delete(draw.drawQrs.map(qr => qr.id));
                }
                await tm.getRepository(draw_entity_1.Draw).delete(draw);
            });
            return { id };
        })
            .run();
    }
    async changeDraw(changeDrawDto, id) {
        const draw = await this.drawRepository.findOne({ where: { id: id } });
        if (draw) {
            draw.sLimit = changeDrawDto.sLimit;
            draw.qrLimit = changeDrawDto.qrLimit;
            draw.qrLimitPeriodMS = changeDrawDto.qrLimitPeriodMS;
            return useful_monads_1.right(await this.drawRepository.save(draw));
        }
        else {
            return useful_monads_1.left(draw_errors_dto_1.createDrawNotFoundById({ id }));
        }
    }
    mapDrawToFlatDraw(d) {
        return Object.assign(Object.assign({}, d), { end: d.end.toISOString(), start: d.start.toISOString() });
    }
    mapDrawToFullDraw(d) {
        return Object.assign(Object.assign({}, d), { end: d.end.toISOString(), start: d.start.toISOString(), drawQrs: d.drawQrs.map(qr => (Object.assign(Object.assign({}, qr), { time: qr.time.toISOString() }))) });
    }
};
DrawService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(draw_entity_1.Draw)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        date_service_1.DateService,
        typeorm_2.Connection])
], DrawService);
exports.DrawService = DrawService;
//# sourceMappingURL=draw.service.js.map