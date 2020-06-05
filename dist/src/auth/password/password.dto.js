"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
var PasswordErrors;
(function (PasswordErrors) {
    PasswordErrors["PasswordsOfPhoneNotFound"] = "PasswordsOfPhoneNotFound";
})(PasswordErrors = exports.PasswordErrors || (exports.PasswordErrors = {}));
class CreatePasswordResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { PasswordsOfPhoneNotFound: { required: false, type: () => require("./password.errors.dto").PasswordsOfPhoneNotFound }, payload: { required: false, type: () => require("../phone/phone.dto").FlatPhoneDto } };
    }
}
exports.CreatePasswordResDto = CreatePasswordResDto;
//# sourceMappingURL=password.dto.js.map