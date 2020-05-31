"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var MdFieldAlreadyExistInScreenName;
(function (MdFieldAlreadyExistInScreenName) {
    MdFieldAlreadyExistInScreenName["MdFieldAlreadyExistInScreen"] = "MdFieldAlreadyExistInScreen";
})(MdFieldAlreadyExistInScreenName || (MdFieldAlreadyExistInScreenName = {}));
class MdFieldAlreadyExistInScreen {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: MdFieldAlreadyExistInScreenName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ screenId: { required: true, type: () => Number }, name: { required: true, type: () => String } }) } };
    }
}
exports.MdFieldAlreadyExistInScreen = MdFieldAlreadyExistInScreen;
exports.createMdFieldAlreadyExistInScreen = error_dto_1.createError(MdFieldAlreadyExistInScreen, MdFieldAlreadyExistInScreenName.MdFieldAlreadyExistInScreen, ({ screenId, name }) => `Поле с именем ${name} уже есть в экране с id = ${screenId}`);
var MdFieldNotFoundByIdName;
(function (MdFieldNotFoundByIdName) {
    MdFieldNotFoundByIdName["MdFieldNotFoundById"] = "MdFieldNotFoundById";
})(MdFieldNotFoundByIdName || (MdFieldNotFoundByIdName = {}));
class MdFieldNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: MdFieldNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ fieldId: { required: true, type: () => Number } }) } };
    }
}
exports.MdFieldNotFoundById = MdFieldNotFoundById;
exports.createMdFieldNotFoundById = error_dto_1.createError(MdFieldNotFoundById, MdFieldNotFoundByIdName.MdFieldNotFoundById, ({ fieldId }) => `Поле с id ${fieldId}`);
//# sourceMappingURL=md.errors.dto.js.map