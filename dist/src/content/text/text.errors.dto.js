"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var TextFieldNotFoundByIdName;
(function (TextFieldNotFoundByIdName) {
    TextFieldNotFoundByIdName["TextFieldNotFoundById"] = "TextFieldNotFoundById";
})(TextFieldNotFoundByIdName || (TextFieldNotFoundByIdName = {}));
class TextFieldNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: TextFieldNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.TextFieldNotFoundById = TextFieldNotFoundById;
exports.createTextFieldNotFoundById = error_dto_1.createError(TextFieldNotFoundById, TextFieldNotFoundByIdName.TextFieldNotFoundById, ({ id }) => `Text (id = ${id}) not found`);
var TextFieldAlreadyExistsName;
(function (TextFieldAlreadyExistsName) {
    TextFieldAlreadyExistsName["TextFieldAlreadyExists"] = "TextFieldAlreadyExists";
})(TextFieldAlreadyExistsName || (TextFieldAlreadyExistsName = {}));
class TextFieldAlreadyExists {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: TextFieldAlreadyExistsName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ name: { required: true, type: () => String }, screenId: { required: true, type: () => Number } }) } };
    }
}
exports.TextFieldAlreadyExists = TextFieldAlreadyExists;
exports.createTextFieldAlreadyExists = error_dto_1.createError(TextFieldAlreadyExists, TextFieldAlreadyExistsName.TextFieldAlreadyExists, ({ name, screenId }) => `Text field ${name} already exists in screen id = ${screenId}`);
//# sourceMappingURL=text.errors.dto.js.map