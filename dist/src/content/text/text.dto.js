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
class TextFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, values: { required: true, type: () => [require("./text.dto").TextDto] } };
    }
}
exports.TextFieldDto = TextFieldDto;
class TextDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createDate: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.TextDto = TextDto;
class FlatTextFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
}
exports.FlatTextFieldDto = FlatTextFieldDto;
class TextFieldContentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, value: { required: false, type: () => require("./text.dto").TextContentDto } };
    }
}
exports.TextFieldContentDto = TextFieldContentDto;
class TextContentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, value: { required: true, type: () => String } };
    }
}
exports.TextContentDto = TextContentDto;
const class_validator_1 = require("class-validator");
class CreateTextFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, screenId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateTextFieldDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateTextFieldDto.prototype, "screenId", void 0);
exports.CreateTextFieldDto = CreateTextFieldDto;
class CreateTextFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./text.dto").FlatTextFieldDto }, ScreenNotFoundById: { required: false, type: () => require("../screen/screen.errors.dto").ScreenNotFoundById }, TextFieldAlreadyExists: { required: false, type: () => require("./text.errors.dto").TextFieldAlreadyExists } };
    }
}
exports.CreateTextFieldResDto = CreateTextFieldResDto;
class CreateTextDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { value: { required: true, type: () => String }, fieldId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateTextDto.prototype, "value", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateTextDto.prototype, "fieldId", void 0);
exports.CreateTextDto = CreateTextDto;
class CreateTextResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./text.dto").TextDto }, TextFiledNotFoundById: { required: false, type: () => require("./text.errors.dto").TextFieldNotFoundById } };
    }
}
exports.CreateTextResDto = CreateTextResDto;
class FindTextOfFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./text.dto").TextFieldDto }, TextFiledNotFoundById: { required: false, type: () => require("./text.errors.dto").TextFieldNotFoundById } };
    }
}
exports.FindTextOfFieldResDto = FindTextOfFieldResDto;
class DeleteTextFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ id: { required: true, type: () => Number } }) }, TextFieldNotFoundById: { required: false, type: () => require("./text.errors.dto").TextFieldNotFoundById } };
    }
}
exports.DeleteTextFieldResDto = DeleteTextFieldResDto;
//# sourceMappingURL=text.dto.js.map