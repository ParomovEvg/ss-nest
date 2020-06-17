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
const content_screen_entity_1 = require("./content-screen.entity");
const typeorm_2 = require("typeorm");
const useful_monads_1 = require("useful-monads");
const screen_errors_dto_1 = require("./screen.errors.dto");
const EitherAsync_1 = require("useful-monads/EitherAsync");
const img_service_1 = require("../img/img.service");
const text_service_1 = require("../text/text.service");
const md_service_1 = require("../md/md.service");
let ScreenService = class ScreenService {
    constructor(screenRepository, connection, imgService, textService, mdService) {
        this.screenRepository = screenRepository;
        this.connection = connection;
        this.imgService = imgService;
        this.textService = textService;
        this.mdService = mdService;
    }
    async getAllScreensDeep() {
        return this.screenRepository.find({
            relations: [
                'textFields',
                'textFields.values',
                'imgFields',
                'imgFields.img',
                'mdFields',
                'mdFields.values',
            ],
        });
    }
    async findAll() {
        return this.screenRepository.find();
    }
    async createScreen({ name, description, }) {
        const screen = await this.screenRepository.findOne({
            where: { name, description },
        });
        if (screen) {
            return useful_monads_1.left(screen_errors_dto_1.createScreenAlreadyExists({ name }));
        }
        else {
            const newScreen = this.screenRepository.create();
            newScreen.name = name;
            newScreen.description = description;
            return useful_monads_1.right(await this.screenRepository.save(newScreen));
        }
    }
    async getScreenById(id) {
        const screen = await this.screenRepository.findOne({
            where: { id: id },
            relations: [
                'textFields',
                'textFields.values',
                'imgFields',
                'imgFields.img',
                'mdFields',
                'mdFields.values',
            ],
        });
        if (screen) {
            return useful_monads_1.right(screen);
        }
        else {
            return useful_monads_1.left(screen_errors_dto_1.createScreenNotFoundById({ id }));
        }
    }
    async deleteScreen(id) {
        return EitherAsync_1.EitherAsync.from(this.getScreenById(id))
            .asyncMap(async (screen) => {
            const queryRunner = this.connection.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            try {
                const res = await EitherAsync_1.mergeInOneAsync([
                    EitherAsync_1.mergeInOneAsync(screen.imgFields.map(imgField => this.imgService.deleteImgField(imgField.id))).run(),
                    EitherAsync_1.mergeInOneAsync(screen.textFields.map(textField => this.textService.deleteTextField(textField.id))).run(),
                    EitherAsync_1.mergeInOneAsync(screen.mdFields.map(mdField => this.mdService.deleteMdField(mdField.id))).run(),
                ]).extract();
                if (res.left) {
                    await queryRunner.rollbackTransaction();
                    throw res.left;
                }
                else {
                    await this.screenRepository.delete(screen);
                    await queryRunner.commitTransaction();
                    return { id: id };
                }
            }
            catch (err) {
                await queryRunner.rollbackTransaction();
                throw err;
            }
            finally {
                await queryRunner.release();
            }
        })
            .run();
    }
    async changeScreenName(screenId, changeScreenNameDto) {
        return EitherAsync_1.EitherAsync.from(this.getScreenById(screenId))
            .asyncMap(async (screen) => {
            screen.name = changeScreenNameDto.name;
            await this.screenRepository.save(screen);
            return this.screenRepository.findOne({
                where: { id: screen.id },
                select: ['name', 'id'],
            });
        })
            .run();
    }
};
ScreenService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_screen_entity_1.ContentScreen)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        img_service_1.ImgService,
        text_service_1.TextService,
        md_service_1.MdService])
], ScreenService);
exports.ScreenService = ScreenService;
//# sourceMappingURL=screen.service.js.map