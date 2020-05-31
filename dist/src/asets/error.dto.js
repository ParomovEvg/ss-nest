"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
class ErrorDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => Object }, message: { required: true, type: () => String }, param: { required: true, type: () => Object } };
    }
}
exports.ErrorDto = ErrorDto;
exports.createError = (constructor, name, message) => {
    const obj = new constructor();
    obj.name = name;
    return (param) => {
        if (message instanceof Function) {
            obj.message = message(param);
        }
        else {
            obj.message = message;
        }
        obj.param = param;
        return obj;
    };
};
//# sourceMappingURL=error.dto.js.map