"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const qr_controller_1 = require("./qr.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qr_string_parser_middleware_1 = require("./qr-string-parser.middleware");
const auth_module_1 = require("../auth/auth.module");
const qr_entity_1 = require("./qr.entity");
const draw_entity_1 = require("./draw/draw.entity");
const checkout_entity_1 = require("./checkout/checkout.entity");
const draw_controller_1 = require("./draw/draw.controller");
const checkout_controller_1 = require("./checkout/checkout.controller");
const draw_service_1 = require("./draw/draw.service");
const checkout_service_1 = require("./checkout/checkout.service");
const qr_service_1 = require("./qr.service");
const date_service_1 = require("./date/date.service");
let QrModule = class QrModule {
    configure(consumer) {
        consumer.apply(qr_string_parser_middleware_1.QrStringParserMiddleware).forRoutes({
            path: 'qr',
            method: common_1.RequestMethod.POST
        });
    }
};
QrModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_entity_1.Qr, draw_entity_1.Draw, checkout_entity_1.Checkout]), auth_module_1.AuthModule],
        controllers: [qr_controller_1.QrController, draw_controller_1.DrawController, checkout_controller_1.CheckoutController],
        exports: [typeorm_1.TypeOrmModule],
        providers: [draw_service_1.DrawService, checkout_service_1.CheckoutService, qr_service_1.QrService, date_service_1.DateService]
    })
], QrModule);
exports.QrModule = QrModule;
//# sourceMappingURL=qr.module.js.map