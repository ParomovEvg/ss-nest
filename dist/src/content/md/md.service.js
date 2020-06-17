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
const content_md_field_entity_1 = require("./content-md-field.entity");
const typeorm_2 = require("typeorm");
const content_md_entity_1 = require("./content-md.entity");
const useful_monads_1 = require("useful-monads");
const md_errors_dto_1 = require("./md.errors.dto");
const screen_service_1 = require("../screen/screen.service");
const EitherAsync_1 = require("useful-monads/EitherAsync");
let MdService = class MdService {
    constructor(mdFieldRepository, mdRepository, screenService, connection) {
        this.mdFieldRepository = mdFieldRepository;
        this.mdRepository = mdRepository;
        this.screenService = screenService;
        this.connection = connection;
    }
    async createMdField(createMdFieldDto) {
        return EitherAsync_1.EitherAsync.from(this.screenService.getScreenById(createMdFieldDto.screenId))
            .asyncChain(async (screen) => {
            const fields = await this.mdFieldRepository.find({
                where: { screen },
            });
            if (fields.some(field => field.name === createMdFieldDto.name)) {
                return useful_monads_1.left(md_errors_dto_1.createMdFieldAlreadyExistInScreen({
                    screenId: screen.id,
                    name: createMdFieldDto.name,
                }));
            }
            else {
                const newField = this.mdFieldRepository.create();
                newField.name = createMdFieldDto.name;
                newField.label = createMdFieldDto.label;
                newField.screen = screen;
                const field = await this.mdFieldRepository.save(newField);
                delete field.screen;
                return useful_monads_1.right(field);
            }
        })
            .run();
    }
    async createMd(createMdDto) {
        return EitherAsync_1.EitherAsync.from(this.findMdField(createMdDto.fieldId))
            .asyncMap(async (field) => {
            console.log(field);
            const md = this.mdRepository.create();
            md.value = createMdDto.value;
            md.field = field;
            const newMd = await this.mdRepository.save(md);
            delete newMd.field;
            return newMd;
        })
            .run();
    }
    async deleteMdField(fieldId) {
        return EitherAsync_1.EitherAsync.from(this.findMdField(fieldId))
            .asyncMap(async (field) => {
            await this.connection.transaction(async (mr) => {
                if (field.values.length) {
                    await mr
                        .getRepository(content_md_entity_1.ContentMd)
                        .delete(field.values.map(value => value.id));
                }
                await mr.getRepository(content_md_field_entity_1.ContentMdField).delete(field);
            });
            return { id: field.id };
        })
            .run();
    }
    async findField(fieldId) {
        return this.findMdField(fieldId);
    }
    async findMdField(fieldId) {
        const field = await this.mdFieldRepository.findOne({
            where: { id: fieldId },
            relations: ['values'],
        });
        if (field) {
            return useful_monads_1.right(field);
        }
        else {
            return useful_monads_1.left(md_errors_dto_1.createMdFieldNotFoundById({ fieldId: fieldId }));
        }
    }
};
MdService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_md_field_entity_1.ContentMdField)),
    __param(1, typeorm_1.InjectRepository(content_md_entity_1.ContentMd)),
    __param(2, common_1.Inject(common_1.forwardRef(() => screen_service_1.ScreenService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        screen_service_1.ScreenService,
        typeorm_2.Connection])
], MdService);
exports.MdService = MdService;
//# sourceMappingURL=md.service.js.map