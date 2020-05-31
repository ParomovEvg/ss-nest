"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var PhoneNotFoundName;
(function (PhoneNotFoundName) {
    PhoneNotFoundName["PhoneAlreadyExists"] = "PhoneNotFound";
})(PhoneNotFoundName = exports.PhoneNotFoundName || (exports.PhoneNotFoundName = {}));
class PhoneNotFound {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: require("./phone.errors.dto").PhoneNotFoundName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ phone: { required: true, type: () => String } }) } };
    }
}
exports.PhoneNotFound = PhoneNotFound;
exports.createPhoneNotFound = error_dto_1.createError(PhoneNotFound, PhoneNotFoundName.PhoneAlreadyExists, ({ phone }) => `Phone ${phone} not found`);
var PhoneAlreadyExistsName;
(function (PhoneAlreadyExistsName) {
    PhoneAlreadyExistsName["PhoneAlreadyExists"] = "PhoneAlreadyExists";
})(PhoneAlreadyExistsName || (PhoneAlreadyExistsName = {}));
class PhoneAlreadyExists {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: PhoneAlreadyExistsName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ phone: { required: true, type: () => String } }) } };
    }
}
exports.PhoneAlreadyExists = PhoneAlreadyExists;
exports.createPhoneAlreadyExists = error_dto_1.createError(PhoneAlreadyExists, PhoneAlreadyExistsName.PhoneAlreadyExists, ({ phone }) => `Phone ${phone} already exists`);
//# sourceMappingURL=phone.errors.dto.js.map