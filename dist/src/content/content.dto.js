"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
class GetContentResDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { payload: { required: true, type: () => [require("./screen/screen.dto").ScreenContentDto] } };
    }
}
exports.GetContentResDto = GetContentResDto;
//# sourceMappingURL=content.dto.js.map