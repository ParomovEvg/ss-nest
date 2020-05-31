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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const screen_service_1 = require("./screen/screen.service");
const lodash_1 = require("lodash");
let ContentService = class ContentService {
    constructor(screenService) {
        this.screenService = screenService;
    }
    async getContent() {
        const screens = await this.screenService.getAllScreensDeep();
        return screens.map(screen => (Object.assign(Object.assign({}, screen), { textFields: screen.textFields.map((_a) => {
                var { values } = _a, rest = __rest(_a, ["values"]);
                return (Object.assign(Object.assign({}, rest), { value: lodash_1.last(values) }));
            }), imgFields: screen.imgFields.map((_a) => {
                var { img } = _a, rest = __rest(_a, ["img"]);
                return (Object.assign(Object.assign({}, rest), { img: lodash_1.last(img) }));
            }), mdFields: screen.mdFields.map((_a) => {
                var { values } = _a, rest = __rest(_a, ["values"]);
                return (Object.assign(Object.assign({}, rest), { value: lodash_1.last(values) }));
            }) })));
    }
};
ContentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [screen_service_1.ScreenService])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map