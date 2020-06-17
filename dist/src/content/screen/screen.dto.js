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
class FlatScreenDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.FlatScreenDto = FlatScreenDto;
class ScreenDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, textFields: { required: true, type: () => [require("../text/text.dto").TextFieldDto] }, imgFields: { required: true, type: () => [require("../img/img.dto").ImgFieldDto] }, mdFields: { required: true, type: () => [require("../md/md.dto").MdFieldDto] } };
    }
}
exports.ScreenDto = ScreenDto;
class ScreenContentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, textFields: { required: true, type: () => [require("../text/text.dto").TextFieldContentDto] }, imgFields: { required: true, type: () => [require("../img/img.dto").ImgFieldContentDto] }, mdFields: { required: true, type: () => [require("../md/md.dto").MdFieldContentDto] } };
    }
}
exports.ScreenContentDto = ScreenContentDto;
class CreateScreenDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.CreateScreenDto = CreateScreenDto;
class CreateScreenResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./screen.dto").FlatScreenDto }, ScreenAlreadyExists: { required: false, type: () => require("./screen.errors.dto").ScreenAlreadyExists } };
    }
}
exports.CreateScreenResDto = CreateScreenResDto;
class FindAllScreensResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: true, type: () => [require("./screen.dto").FlatScreenDto] } };
    }
}
exports.FindAllScreensResDto = FindAllScreensResDto;
class FindScreenByIdResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./screen.dto").ScreenDto }, ScreenNotFoundById: { required: false, type: () => require("./screen.errors.dto").ScreenNotFoundById } };
    }
}
exports.FindScreenByIdResDto = FindScreenByIdResDto;
class DeleteScreenResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ id: { required: true, type: () => Number } }) }, ScreenNotFoundById: { required: false, type: () => require("./screen.errors.dto").ScreenNotFoundById } };
    }
}
exports.DeleteScreenResDto = DeleteScreenResDto;
class ChangeScreenNameDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangeScreenNameDto.prototype, "name", void 0);
exports.ChangeScreenNameDto = ChangeScreenNameDto;
class ChangeScreenNameResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./screen.dto").FlatScreenDto }, ScreenNotFoundById: { required: false, type: () => require("./screen.errors.dto").ScreenNotFoundById } };
    }
}
exports.ChangeScreenNameResDto = ChangeScreenNameResDto;
//# sourceMappingURL=screen.dto.js.map