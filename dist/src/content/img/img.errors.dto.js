"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var ImgFieldAlreadyExistsInScreenName;
(function (ImgFieldAlreadyExistsInScreenName) {
    ImgFieldAlreadyExistsInScreenName["ImgFieldAlreadyExistsInScreen"] = "ImgFieldAlreadyExistsInScreen";
})(ImgFieldAlreadyExistsInScreenName || (ImgFieldAlreadyExistsInScreenName = {}));
class ImgFieldAlreadyExistsInScreen {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ImgFieldAlreadyExistsInScreenName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ name: { required: true, type: () => String }, screenId: { required: true, type: () => Number } }) } };
    }
}
exports.ImgFieldAlreadyExistsInScreen = ImgFieldAlreadyExistsInScreen;
exports.createImgFieldAlreadyExistsInScreen = error_dto_1.createError(ImgFieldAlreadyExistsInScreen, ImgFieldAlreadyExistsInScreenName.ImgFieldAlreadyExistsInScreen, ({ name, screenId }) => `Img field ${name} already exists in screenId = ${screenId}`);
var ImgFieldNotFoundByIdName;
(function (ImgFieldNotFoundByIdName) {
    ImgFieldNotFoundByIdName["ImgFieldNotFoundById"] = "ImgFieldNotFoundById";
})(ImgFieldNotFoundByIdName || (ImgFieldNotFoundByIdName = {}));
class ImgFieldNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ImgFieldNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.ImgFieldNotFoundById = ImgFieldNotFoundById;
exports.createImgFieldNotFoundById = error_dto_1.createError(ImgFieldNotFoundById, ImgFieldNotFoundByIdName.ImgFieldNotFoundById, ({ id }) => `Img Field not found By id = ${id}`);
var ImgVersionBeforeNotFoundName;
(function (ImgVersionBeforeNotFoundName) {
    ImgVersionBeforeNotFoundName["ImgVersionBeforeNotFound"] = "ImgVersionBeforeNotFound";
})(ImgVersionBeforeNotFoundName || (ImgVersionBeforeNotFoundName = {}));
class ImgVersionBeforeNotFound {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ImgVersionBeforeNotFoundName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ fieldId: { required: true, type: () => Number }, imgId: { required: true, type: () => Number } }) } };
    }
}
exports.ImgVersionBeforeNotFound = ImgVersionBeforeNotFound;
exports.createImgVersionBeforeNotFound = error_dto_1.createError(ImgVersionBeforeNotFound, ImgVersionBeforeNotFoundName.ImgVersionBeforeNotFound, ({ fieldId }) => `Это последняя сохранённая версия поля fieldId = ${fieldId}`);
var ImgNotFoundByIdName;
(function (ImgNotFoundByIdName) {
    ImgNotFoundByIdName["ImgNotFoundById"] = "ImgNotFoundById";
})(ImgNotFoundByIdName || (ImgNotFoundByIdName = {}));
class ImgNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ImgNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.ImgNotFoundById = ImgNotFoundById;
exports.createImgNotFoundById = error_dto_1.createError(ImgNotFoundById, ImgNotFoundByIdName.ImgNotFoundById, ({ id }) => `Изображение с id = ${id} не найдено`);
var ImgNotFoundByIdInFieldName;
(function (ImgNotFoundByIdInFieldName) {
    ImgNotFoundByIdInFieldName["ImgNotFoundByIdInField"] = "ImgNotFoundByIdInField";
})(ImgNotFoundByIdInFieldName || (ImgNotFoundByIdInFieldName = {}));
class ImgNotFoundByIdInField {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ImgNotFoundByIdInFieldName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ imgId: { required: true, type: () => Number }, fieldId: { required: true, type: () => Number } }) } };
    }
}
exports.ImgNotFoundByIdInField = ImgNotFoundByIdInField;
exports.createImgNotFoundByIdInField = error_dto_1.createError(ImgNotFoundByIdInField, ImgNotFoundByIdInFieldName.ImgNotFoundByIdInField, ({ imgId, fieldId }) => `Изображение imgId = ${imgId} не найдено в поле с fieldId = ${fieldId}`);
//# sourceMappingURL=img.errors.dto.js.map