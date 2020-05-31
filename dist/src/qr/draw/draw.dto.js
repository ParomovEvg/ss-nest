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
const class_validator_1 = require("class-validator");
class FlatDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, start: { required: true, type: () => String }, end: { required: true, type: () => String }, description: { required: true, type: () => String }, sLimit: { required: true, type: () => Number }, qrLimit: { required: true, type: () => Number }, qrLimitPeriodMS: { required: true, type: () => Number } };
    }
}
exports.FlatDrawDto = FlatDrawDto;
class FullDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, start: { required: true, type: () => String }, end: { required: true, type: () => String }, description: { required: true, type: () => String }, sLimit: { required: true, type: () => Number }, qrLimit: { required: true, type: () => Number }, qrLimitPeriodMS: { required: true, type: () => Number }, drawQrs: { required: true, type: () => [require("../qr.dto").FlatQrDto] } };
    }
}
exports.FullDrawDto = FullDrawDto;
var DrawErrors;
(function (DrawErrors) {
    DrawErrors["DatesAreTaken"] = "DatesAreTaken";
    DrawErrors["EndEarlierThanStart"] = "EndEarlierThanStart";
    DrawErrors["DrawNotFoundById"] = "DrawNotFoundById";
    DrawErrors["NotDrawNow"] = "NotDrawNow";
    DrawErrors["DateNotValid"] = "DateNotValid";
})(DrawErrors = exports.DrawErrors || (exports.DrawErrors = {}));
class CreateDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { start: { required: true, type: () => String }, end: { required: true, type: () => String }, description: { required: true, type: () => String }, sLimit: { required: true, type: () => Number, minimum: 0 }, qrLimit: { required: true, type: () => Number, minimum: 0 }, qrLimitPeriodMS: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CreateDrawDto.prototype, "start", void 0);
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CreateDrawDto.prototype, "end", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDrawDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawDto.prototype, "sLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawDto.prototype, "qrLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawDto.prototype, "qrLimitPeriodMS", void 0);
exports.CreateDrawDto = CreateDrawDto;
class CreateDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./draw.dto").FlatDrawDto }, DatesAreTaken: { required: false, type: () => require("./draw.errors.dto").DatesAreTaken }, EndEarlierThanStart: { required: false, type: () => require("./draw.errors.dto").EndEarlierThanStart }, DateNotValid: { required: false, type: () => require("./draw.errors.dto").DateNotValid } };
    }
}
exports.CreateDrawResDto = CreateDrawResDto;
class CreateDrawNextDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { end: { required: true, type: () => String }, description: { required: true, type: () => String }, sLimit: { required: true, type: () => Number, minimum: 0 }, qrLimit: { required: true, type: () => Number, minimum: 0 }, qrLimitPeriodMS: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CreateDrawNextDto.prototype, "end", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDrawNextDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawNextDto.prototype, "sLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawNextDto.prototype, "qrLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateDrawNextDto.prototype, "qrLimitPeriodMS", void 0);
exports.CreateDrawNextDto = CreateDrawNextDto;
class DeleteDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number } };
    }
}
exports.DeleteDrawDto = DeleteDrawDto;
class DeleteDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ id: { required: true, type: () => Number } }) }, DrawNotFoundById: { required: false, type: () => require("./draw.errors.dto").DrawNotFoundById } };
    }
}
exports.DeleteDrawResDto = DeleteDrawResDto;
class FindNowDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./draw.dto").FlatDrawDto }, NotDrawNow: { required: false, type: () => require("./draw.errors.dto").NotDrawNow } };
    }
}
exports.FindNowDrawResDto = FindNowDrawResDto;
class FindAllDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => [require("./draw.dto").FlatDrawDto] } };
    }
}
exports.FindAllDrawResDto = FindAllDrawResDto;
class ChangeDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { sLimit: { required: true, type: () => Number, minimum: 0 }, qrLimit: { required: true, type: () => Number, minimum: 0 }, qrLimitPeriodMS: { required: true, type: () => Number, minimum: 0 } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], ChangeDrawDto.prototype, "sLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], ChangeDrawDto.prototype, "qrLimit", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], ChangeDrawDto.prototype, "qrLimitPeriodMS", void 0);
exports.ChangeDrawDto = ChangeDrawDto;
class ChangeDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./draw.dto").FlatDrawDto }, DrawNotFoundById: { required: false, type: () => require("./draw.errors.dto").DrawNotFoundById } };
    }
}
exports.ChangeDrawResDto = ChangeDrawResDto;
class FindFullDrawDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number } };
    }
}
exports.FindFullDrawDto = FindFullDrawDto;
class FindFullDrawResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./draw.dto").FullDrawDto }, DrawNotFoundById: { required: false, type: () => require("./draw.errors.dto").DrawNotFoundById } };
    }
}
exports.FindFullDrawResDto = FindFullDrawResDto;
//# sourceMappingURL=draw.dto.js.map