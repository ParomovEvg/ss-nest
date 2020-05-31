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
class MdDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, value: { required: true, type: () => String } };
    }
}
exports.MdDto = MdDto;
class MdFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, label: { required: true, type: () => String }, values: { required: true, type: () => [require("./md.dto").MdDto] } };
    }
}
exports.MdFieldDto = MdFieldDto;
class FlatMdFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, label: { required: true, type: () => String } };
    }
}
exports.FlatMdFieldDto = FlatMdFieldDto;
class MdFieldContentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, label: { required: true, type: () => String }, value: { required: true, type: () => require("./md.dto").MdDto } };
    }
}
exports.MdFieldContentDto = MdFieldContentDto;
class CreateMdFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, label: { required: true, type: () => String }, screenId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateMdFieldDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateMdFieldDto.prototype, "label", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateMdFieldDto.prototype, "screenId", void 0);
exports.CreateMdFieldDto = CreateMdFieldDto;
class CreateMdFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./md.dto").FlatMdFieldDto }, ScreenNotFoundById: { required: false, type: () => require("../screen/screen.errors.dto").ScreenNotFoundById }, MdFieldAlreadyExistInScreen: { required: false, type: () => require("./md.errors.dto").MdFieldAlreadyExistInScreen } };
    }
}
exports.CreateMdFieldResDto = CreateMdFieldResDto;
class CreateMdDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fieldId: { required: true, type: () => Number }, value: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateMdDto.prototype, "fieldId", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateMdDto.prototype, "value", void 0);
exports.CreateMdDto = CreateMdDto;
class CreateMdResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./md.dto").MdDto }, MdFieldNotFoundById: { required: false, type: () => require("./md.errors.dto").MdFieldNotFoundById } };
    }
}
exports.CreateMdResDto = CreateMdResDto;
class DeleteMdFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ id: { required: true, type: () => Number } }) }, MdFieldNotFoundById: { required: false, type: () => require("./md.errors.dto").MdFieldNotFoundById } };
    }
}
exports.DeleteMdFieldResDto = DeleteMdFieldResDto;
class FindMdFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./md.dto").MdFieldDto }, MdFieldNotFoundById: { required: false, type: () => require("./md.errors.dto").MdFieldNotFoundById } };
    }
}
exports.FindMdFieldResDto = FindMdFieldResDto;
//# sourceMappingURL=md.dto.js.map