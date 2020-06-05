"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const node_telegram_bot_api_1 = require("node-telegram-bot-api");
let SendPasswordTeleService = class SendPasswordTeleService {
    constructor(configService) {
        this.configService = configService;
        const token = configService.get('BOT_TOKEN');
        this.bot = new node_telegram_bot_api_1.default(token, { polling: true });
    }
    async sendPassword(phone, password) {
        this.bot.sendMessage();
    }
};
SendPasswordTeleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SendPasswordTeleService);
exports.SendPasswordTeleService = SendPasswordTeleService;
//# sourceMappingURL=send-password-tele.service.js.map