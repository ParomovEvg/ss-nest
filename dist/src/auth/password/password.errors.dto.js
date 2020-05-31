"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var PasswordsOfPhoneNotFoundName;
(function (PasswordsOfPhoneNotFoundName) {
    PasswordsOfPhoneNotFoundName["PasswordsOfPhoneNotFound"] = "PasswordsOfPhoneNotFound";
})(PasswordsOfPhoneNotFoundName || (PasswordsOfPhoneNotFoundName = {}));
class PasswordsOfPhoneNotFound {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: PasswordsOfPhoneNotFoundName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ phone: { required: true, type: () => String } }) } };
    }
}
exports.PasswordsOfPhoneNotFound = PasswordsOfPhoneNotFound;
exports.createPasswordsOfPhoneNotFound = error_dto_1.createError(PasswordsOfPhoneNotFound, PasswordsOfPhoneNotFoundName.PasswordsOfPhoneNotFound, ({ phone }) => `Phone ${phone} doesn't have passwords`);
//# sourceMappingURL=password.errors.dto.js.map