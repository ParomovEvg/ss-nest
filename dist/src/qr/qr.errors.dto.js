"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../asets/error.dto");
var QrAlreadyExistsName;
(function (QrAlreadyExistsName) {
    QrAlreadyExistsName["QrAlreadyExists"] = "QrAlreadyExists";
})(QrAlreadyExistsName || (QrAlreadyExistsName = {}));
class QrAlreadyExists {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: QrAlreadyExistsName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ fd: { required: true, type: () => String }, fp: { required: true, type: () => String } }) } };
    }
}
exports.QrAlreadyExists = QrAlreadyExists;
exports.createQrAlreadyExists = error_dto_1.createError(QrAlreadyExists, QrAlreadyExistsName.QrAlreadyExists, ({ fd, fp }) => `Qr there fd = ${fd}; fp = ${fp}`);
var QrSalaryNotEnoughName;
(function (QrSalaryNotEnoughName) {
    QrSalaryNotEnoughName["QrSalaryNotEnough"] = "QrSalaryNotEnough";
})(QrSalaryNotEnoughName || (QrSalaryNotEnoughName = {}));
class QrSalaryNotEnough {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: QrSalaryNotEnoughName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ s: { required: true, type: () => Number }, sLimit: { required: true, type: () => Number } }) } };
    }
}
exports.QrSalaryNotEnough = QrSalaryNotEnough;
exports.createQrSalaryNotEnough = error_dto_1.createError(QrSalaryNotEnough, QrSalaryNotEnoughName.QrSalaryNotEnough, ({ s, sLimit }) => `Qr salary not enough s = ${s} : sLimit = ${sLimit}`);
var QrRegistrationLimitExceededName;
(function (QrRegistrationLimitExceededName) {
    QrRegistrationLimitExceededName["QrRegistrationLimitExceeded"] = "QrRegistrationLimitExceeded";
})(QrRegistrationLimitExceededName || (QrRegistrationLimitExceededName = {}));
class QrRegistrationLimitExceeded {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: QrRegistrationLimitExceededName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ nextTime: { required: true, type: () => String }, phone: { required: true, type: () => String }, qrLimit: { required: true, type: () => Number } }) } };
    }
}
exports.QrRegistrationLimitExceeded = QrRegistrationLimitExceeded;
exports.createQrRegistrationLimitExceeded = error_dto_1.createError(QrRegistrationLimitExceeded, QrRegistrationLimitExceededName.QrRegistrationLimitExceeded, ({ phone, qrLimit, nextTime }) => `Qr registration limit (${qrLimit}) exceeded of phone = ${phone}, next qr can be added in ${new Date(Date.parse(nextTime)).toLocaleString()}`);
var PhoneIdNotFoundByPhoneName;
(function (PhoneIdNotFoundByPhoneName) {
    PhoneIdNotFoundByPhoneName["PhoneIdNotFoundByPhone"] = "PhoneNotFoundByPhone";
})(PhoneIdNotFoundByPhoneName || (PhoneIdNotFoundByPhoneName = {}));
class PhoneIdNotFoundByPhone {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: PhoneIdNotFoundByPhoneName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ phone: { required: true, type: () => String } }) } };
    }
}
exports.PhoneIdNotFoundByPhone = PhoneIdNotFoundByPhone;
exports.createPhoneIdNotFoundByPhone = error_dto_1.createError(PhoneIdNotFoundByPhone, PhoneIdNotFoundByPhoneName.PhoneIdNotFoundByPhone, ({ phone }) => `Телефон не найден ${phone}`);
//# sourceMappingURL=qr.errors.dto.js.map