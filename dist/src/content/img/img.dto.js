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
class ImgFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, img: { required: true, type: () => [require("./img.dto").ImgDto] } };
    }
}
exports.ImgFieldDto = ImgFieldDto;
class ImgFieldContentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, img: { required: false, type: () => require("./img.dto").ImgDto } };
    }
}
exports.ImgFieldContentDto = ImgFieldContentDto;
class FlatImgFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.FlatImgFieldDto = FlatImgFieldDto;
class ChangeImgField {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.ChangeImgField = ChangeImgField;
class ImgDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, path: { required: true, type: () => String }, url: { required: true, type: () => String }, host: { required: true, type: () => String } };
    }
}
exports.ImgDto = ImgDto;
class CreateImgFieldDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { screenId: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateImgFieldDto.prototype, "screenId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateImgFieldDto.prototype, "name", void 0);
exports.CreateImgFieldDto = CreateImgFieldDto;
class CreateImgFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").FlatImgFieldDto }, ScreenNotFoundById: { required: false, type: () => require("../screen/screen.errors.dto").ScreenNotFoundById }, ImgFieldAlreadyExistsInScreen: { required: false, type: () => require("./img.errors.dto").ImgFieldAlreadyExistsInScreen } };
    }
}
exports.CreateImgFieldResDto = CreateImgFieldResDto;
class DeleteImgFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => ({ id: { required: true, type: () => Number } }) }, ImgFieldNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgFieldNotFoundById } };
    }
}
exports.DeleteImgFieldResDto = DeleteImgFieldResDto;
class CreateImgResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").ImgDto }, ImgFieldNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgFieldNotFoundById } };
    }
}
exports.CreateImgResDto = CreateImgResDto;
class FindImgFieldByIdResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").ImgFieldDto }, ImgFieldNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgFieldNotFoundById } };
    }
}
exports.FindImgFieldByIdResDto = FindImgFieldByIdResDto;
class UpdateImgFieldResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").ImgFieldDto }, ImgFieldNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgFieldNotFoundById } };
    }
}
exports.UpdateImgFieldResDto = UpdateImgFieldResDto;
class GetImgBeforeResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").ImgDto }, ImgVersionBeforeNotFound: { required: false, type: () => require("./img.errors.dto").ImgVersionBeforeNotFound }, ImgFieldNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgFieldNotFoundById }, ImgNotFoundByIdInField: { required: false, type: () => require("./img.errors.dto").ImgNotFoundByIdInField } };
    }
}
exports.GetImgBeforeResDto = GetImgBeforeResDto;
class SaveImgLastDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { imgId: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SaveImgLastDto.prototype, "imgId", void 0);
exports.SaveImgLastDto = SaveImgLastDto;
class SaveImgLastResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: false, type: () => require("./img.dto").ImgDto }, ImgNotFoundById: { required: false, type: () => require("./img.errors.dto").ImgNotFoundById } };
    }
}
exports.SaveImgLastResDto = SaveImgLastResDto;
//# sourceMappingURL=img.dto.js.map