"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const url_1 = require("url");
let QrStringParserMiddleware = class QrStringParserMiddleware {
    use(req, res, next) {
        if (!req.body.qrString) {
            return next();
        }
        const lastBody = req.body;
        let newBody;
        try {
            newBody = Object.assign(Object.assign({}, lastBody), this.parseQrString(req.body.qrString));
        }
        catch (e) {
            newBody = lastBody;
        }
        delete newBody.qrString;
        req.body = newBody;
        next();
    }
    parseQrString(qrString) {
        const url = url_1.parse(qrString, true);
        return url.query;
    }
};
QrStringParserMiddleware = __decorate([
    common_1.Injectable()
], QrStringParserMiddleware);
exports.QrStringParserMiddleware = QrStringParserMiddleware;
//# sourceMappingURL=qr-string-parser.middleware.js.map