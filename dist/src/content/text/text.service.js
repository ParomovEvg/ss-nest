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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const content_text_entity_1 = require("./content-text.entity");
const typeorm_2 = require("typeorm");
const content_text_field_entity_1 = require("./content-text-field.entity");
const screen_service_1 = require("../screen/screen.service");
const useful_monads_1 = require("useful-monads");
const text_errors_dto_1 = require("./text.errors.dto");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let TextService = class TextService {
    constructor(textRepository, textFieldRepository, screenService, connection) {
        this.textRepository = textRepository;
        this.textFieldRepository = textFieldRepository;
        this.screenService = screenService;
        this.connection = connection;
    }
    async createField({ name, screenId, }) {
        return EitherAsync_1.EitherAsync.from(this.screenService.getScreenById(screenId))
            .asyncChain(async (screen) => {
            const field = await this.textFieldRepository.findOne({
                where: { screen: screen, name: name },
            });
            if (field) {
                return useful_monads_1.left(text_errors_dto_1.createTextFieldAlreadyExists({ screenId: screen.id, name: name }));
            }
            else {
                const textField = this.textFieldRepository.create();
                textField.name = name;
                textField.screen = screen;
                return useful_monads_1.right(await this.textFieldRepository.save(textField));
            }
        })
            .run();
    }
    async deleteTextField(fieldId) {
        return EitherAsync_1.EitherAsync.from(this.getFieldById(fieldId))
            .asyncMap(async (field) => {
            await this.connection.transaction(async (manager) => {
                if (field.values.length)
                    await manager
                        .getRepository(content_text_entity_1.ContentText)
                        .delete(field.values.map(e => e.id));
                await manager.delete(content_text_field_entity_1.ContentTextField, field);
            });
            return { id: fieldId };
        })
            .run();
    }
    async findTextFieldById(fieldId) {
        return this.getFieldById(fieldId).then(r => r.map(filed => (Object.assign(Object.assign({}, filed), { values: filed.values.map(value => (Object.assign(Object.assign({}, value), { createDate: value.createDate.toISOString() }))) }))));
    }
    async createText({ value, fieldId, }) {
        return EitherAsync_1.EitherAsync.from(this.getFieldById(fieldId))
            .asyncMap(async (field) => {
            const text = this.textRepository.create();
            text.value = value;
            text.field = field;
            const result = await this.textRepository.save(text);
            return Object.assign(Object.assign({}, result), { createDate: result.createDate.toISOString() });
        })
            .run();
    }
    async getFieldById(fieldId) {
        const field = await this.textFieldRepository.findOne({
            where: { id: fieldId },
            relations: ['values'],
        });
        if (field) {
            return useful_monads_1.right(field);
        }
        else {
            return useful_monads_1.left(text_errors_dto_1.createTextFieldNotFoundById({ id: fieldId }));
        }
    }
};
TextService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_text_entity_1.ContentText)),
    __param(1, typeorm_1.InjectRepository(content_text_field_entity_1.ContentTextField)),
    __param(2, common_1.Inject(common_1.forwardRef(() => screen_service_1.ScreenService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        screen_service_1.ScreenService,
        typeorm_2.Connection])
], TextService);
exports.TextService = TextService;
//# sourceMappingURL=text.service.js.map