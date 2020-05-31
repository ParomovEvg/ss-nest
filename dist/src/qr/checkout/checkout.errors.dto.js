"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var CheckoutNotFoundByIdName;
(function (CheckoutNotFoundByIdName) {
    CheckoutNotFoundByIdName["CheckoutNotFoundById"] = "CheckoutNotFoundById";
})(CheckoutNotFoundByIdName || (CheckoutNotFoundByIdName = {}));
class CheckoutNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: CheckoutNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.CheckoutNotFoundById = CheckoutNotFoundById;
exports.createCheckoutNotFoundById = error_dto_1.createError(CheckoutNotFoundById, CheckoutNotFoundByIdName.CheckoutNotFoundById, ({ id }) => `Checkout where id = ${id} not found`);
var CheckoutNotFoundByFnName;
(function (CheckoutNotFoundByFnName) {
    CheckoutNotFoundByFnName["CheckoutNotFoundByFn"] = "CheckoutNotFoundByFn";
})(CheckoutNotFoundByFnName || (CheckoutNotFoundByFnName = {}));
class CheckoutNotFoundByFn {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: CheckoutNotFoundByFnName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ fn: { required: true, type: () => String } }) } };
    }
}
exports.CheckoutNotFoundByFn = CheckoutNotFoundByFn;
exports.createCheckoutNotFoundByFn = error_dto_1.createError(CheckoutNotFoundByFn, CheckoutNotFoundByFnName.CheckoutNotFoundByFn, ({ fn }) => `Checkout where fn = ${fn} not found`);
var CheckoutAlreadyExistName;
(function (CheckoutAlreadyExistName) {
    CheckoutAlreadyExistName["CheckoutAlreadyExists"] = "CheckoutAlreadyExists";
})(CheckoutAlreadyExistName = exports.CheckoutAlreadyExistName || (exports.CheckoutAlreadyExistName = {}));
class CheckoutAlreadyExists {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: require("./checkout.errors.dto").CheckoutAlreadyExistName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ fn: { required: true, type: () => String } }) } };
    }
}
exports.CheckoutAlreadyExists = CheckoutAlreadyExists;
exports.createCheckoutAlreadyExist = error_dto_1.createError(CheckoutAlreadyExists, CheckoutAlreadyExistName.CheckoutAlreadyExists, ({ fn }) => `Checkout where fn = ${fn} already exists`);
//# sourceMappingURL=checkout.errors.dto.js.map