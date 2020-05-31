"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const draw_errors_dto_1 = require("../draw/draw.errors.dto");
const useful_monads_1 = require("useful-monads");
let DateService = class DateService {
    async checkDateRangeAreFree(draws, start, end) {
        return draws
            .map(draw => {
            const drawStartNumber = +draw.start;
            const drawEndNumber = +draw.end;
            if (+end < drawStartNumber || +start >= drawEndNumber) {
                return useful_monads_1.right([start, end]);
            }
            else {
                return useful_monads_1.left(draw_errors_dto_1.createDatesAreTaken({
                    start: start.toISOString(),
                    end: end.toISOString(),
                    startTaken: new Date(drawStartNumber).toISOString(),
                    endTaken: new Date(drawEndNumber).toISOString(),
                }));
            }
        })
            .reduce((lastEither, next) => {
            return lastEither.chain(() => next);
        }, useful_monads_1.right([start, end]));
    }
    checkEndStartPosition(start, end) {
        if (+end - +start < -1) {
            return useful_monads_1.left(draw_errors_dto_1.createEndEarlierThanStart({
                end: end.toISOString(),
                start: start.toISOString(),
            }));
        }
        return useful_monads_1.right([start, end]);
    }
    parseDateString(dateString) {
        try {
            return useful_monads_1.right(new Date(Date.parse(dateString)));
        }
        catch (e) {
            return useful_monads_1.left(draw_errors_dto_1.createDateNotValid({ dateString: e.toISOString() }));
        }
    }
};
DateService = __decorate([
    common_1.Injectable()
], DateService);
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map