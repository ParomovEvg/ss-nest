"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var ScreenAlreadyExistsName;
(function (ScreenAlreadyExistsName) {
    ScreenAlreadyExistsName["ScreenAlreadyExists"] = "ScreenAlreadyExists";
})(ScreenAlreadyExistsName || (ScreenAlreadyExistsName = {}));
class ScreenAlreadyExists {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ScreenAlreadyExistsName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ name: { required: true, type: () => String } }) } };
    }
}
exports.ScreenAlreadyExists = ScreenAlreadyExists;
exports.createScreenAlreadyExists = error_dto_1.createError(ScreenAlreadyExists, ScreenAlreadyExistsName.ScreenAlreadyExists, ({ name }) => `Screen name = ${name} already exists`);
var ScreenNotFoundByIdName;
(function (ScreenNotFoundByIdName) {
    ScreenNotFoundByIdName["ScreenNotFoundById"] = "ScreenNotFoundById";
})(ScreenNotFoundByIdName || (ScreenNotFoundByIdName = {}));
class ScreenNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: ScreenNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.ScreenNotFoundById = ScreenNotFoundById;
exports.createScreenNotFoundById = error_dto_1.createError(ScreenNotFoundById, ScreenNotFoundByIdName.ScreenNotFoundById, ({ id }) => `Screen (id = ${id}) not found`);
//# sourceMappingURL=screen.errors.dto.js.map