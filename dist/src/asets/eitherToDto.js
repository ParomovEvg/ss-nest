"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function eitherToDto(e) {
    const res = {};
    e.map(r => (res.payload = r)).mapLeft(e => {
        res[e.name] = e;
    });
    return res;
}
exports.eitherToDto = eitherToDto;
//# sourceMappingURL=eitherToDto.js.map