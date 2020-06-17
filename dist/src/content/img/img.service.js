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
const typeorm_1 = require("@nestjs/typeorm");
const content_img_entity_1 = require("./content-img.entity");
const typeorm_2 = require("typeorm");
const content_img_field_entity_1 = require("./content-img-field.entity");
const screen_service_1 = require("../screen/screen.service");
const useful_monads_1 = require("useful-monads");
const img_errors_dto_1 = require("./img.errors.dto");
const EitherAsync_1 = require("useful-monads/EitherAsync");
const os_1 = require("os");
const lodash_1 = require("lodash");
const fs = require('fs').promises;
const Path = require("path");
const url_1 = require("url");
const config_1 = require("@nestjs/config");
const uuid_1 = require("uuid");
let ImgService = class ImgService {
    constructor(imgRepository, imgFieldRepository, screenService, connection, configService) {
        this.imgRepository = imgRepository;
        this.imgFieldRepository = imgFieldRepository;
        this.screenService = screenService;
        this.connection = connection;
        this.configService = configService;
        this.imgRepository.find().then(images => {
            const host = os_1.hostname();
            this.imgRepository
                .delete(images.filter(img => img.host !== host).map(img => img.id))
                .catch(e => console.log(e))
                .then(() => {
                return fs.readdir(Path.format({
                    dir: 'uploads',
                }));
            })
                .then((names) => names
                .map(name => Path.format({
                dir: 'uploads',
                base: name,
            }))
                .filter(path => !images.find(img => img.path === path)))
                .then((paths) => {
                paths.forEach(path => {
                    fs.unlink(path);
                });
            });
        });
    }
    async findFields() {
        return this.imgFieldRepository.find({ relations: ['img'] });
    }
    async createImgField(screenId, name, description) {
        return EitherAsync_1.EitherAsync.from(this.screenService.getScreenById(screenId))
            .asyncChain(screen => this.checkFieldName(name, screen))
            .asyncMap(async (screen) => {
            const field = this.imgFieldRepository.create();
            field.screen = screen;
            field.description = description;
            field.name = name;
            return this.imgFieldRepository
                .save(field)
                .then((_a) => {
                var { screen } = _a, field = __rest(_a, ["screen"]);
                return (Object.assign({}, field));
            });
        })
            .run();
    }
    async deleteImgField(fieldId) {
        return EitherAsync_1.EitherAsync.from(this.findFiledById(fieldId))
            .asyncMap(async (field) => {
            await this.connection.transaction(async (manager) => {
                if (field.img.length) {
                    await manager
                        .getRepository(content_img_entity_1.ContentImg)
                        .delete(field.img.map(img => img.id));
                }
                await manager.getRepository(content_img_field_entity_1.ContentImgField).delete(field);
                for (const img of field.img) {
                    await fs.unlink(img.path);
                }
            });
            return { id: field.id };
        })
            .run();
    }
    async updateImgField(changeField, fieldId) {
        const field = await this.imgFieldRepository.findOne({
            where: { id: fieldId },
        });
        if (field) {
            field.name = changeField.name;
            field.description = changeField.description;
            return useful_monads_1.right(await this.imgFieldRepository.save(field));
        }
        else {
            return useful_monads_1.left(img_errors_dto_1.createImgFieldNotFoundById({ id: field.id }));
        }
    }
    async createImg(fieldId, path) {
        return EitherAsync_1.EitherAsync.from(this.findFiledById(fieldId))
            .asyncChain(async (field) => {
            await this.deleteIfMoreThenLimit(field, 2);
            return this.findFiledById(field.id);
        })
            .asyncMap(field => {
            const url = new url_1.URL(path, this.configService.get('IMG_BASE'));
            const img = this.imgRepository.create();
            img.field = field;
            img.url = url.toString();
            img.path = path;
            img.host = os_1.hostname();
            return this.imgRepository.save(img);
        })
            .run();
    }
    saveImgLast(imgId) {
        return EitherAsync_1.EitherAsync.from(this.findImg(imgId))
            .asyncMap(async (img) => {
            const newImg = this.imgRepository.create();
            const ext = lodash_1.last(img.path.split('.'));
            const newPath = 'uploads/' + uuid_1.v4() + '.' + ext;
            await fs.copyFile(img.path, newPath);
            const url = new url_1.URL(newPath, this.configService.get('IMG_BASE'));
            newImg.field = img.field;
            newImg.url = url.toString();
            newImg.path = newPath;
            newImg.host = os_1.hostname();
            await this.deleteIfMoreThenLimit(img.field, 2);
            const copyImg = await this.imgRepository.save(newImg);
            delete copyImg.field;
            return copyImg;
        })
            .run();
    }
    async getImageBefore(fieldId, imgId) {
        return EitherAsync_1.EitherAsync.from(this.findFiledById(fieldId))
            .asyncChain(async (field) => this.findImgByIdInField(imgId, field))
            .asyncChain(([img, field]) => this.getImageBeforeImage(img, field))
            .run();
    }
    async getImageBeforeImage(img, field) {
        const index = field.img.findIndex(r => r.id === img.id) - 1;
        if (index < 0) {
            return useful_monads_1.left(img_errors_dto_1.createImgVersionBeforeNotFound({
                fieldId: field.id,
                imgId: img.id,
            }));
        }
        else {
            return useful_monads_1.right(field.img[index]);
        }
    }
    async findFiledById(id) {
        const imgField = await this.imgFieldRepository.findOne({
            where: { id: id },
            relations: ['img'],
        });
        if (imgField) {
            return useful_monads_1.right(imgField);
        }
        else {
            return useful_monads_1.left(img_errors_dto_1.createImgFieldNotFoundById({ id }));
        }
    }
    async findImgByIdInField(imgId, field) {
        const img = await this.imgRepository.findOne({ where: { id: imgId } });
        const res = field.img.find(r => r.id === img.id);
        if (res) {
            return useful_monads_1.right([img, field]);
        }
        else {
            return useful_monads_1.left(img_errors_dto_1.createImgNotFoundByIdInField({ imgId: imgId, fieldId: field.id }));
        }
    }
    async checkFieldName(name, screen) {
        const field = await this.imgFieldRepository.findOne({
            where: { name, screen },
        });
        if (field) {
            return useful_monads_1.left(img_errors_dto_1.createImgFieldAlreadyExistsInScreen({ name, screenId: screen.id }));
        }
        else {
            return useful_monads_1.right(screen);
        }
    }
    async findImg(imgId) {
        const img = await this.imgRepository.findOne({
            where: { id: imgId },
            relations: ['field', 'field.img'],
        });
        if (img) {
            return useful_monads_1.right(img);
        }
        else {
            return useful_monads_1.left(img_errors_dto_1.createImgNotFoundById({ id: imgId }));
        }
    }
    async deleteIfMoreThenLimit(field, limit) {
        const images = field.img;
        if (images.length > limit) {
            const imagesToDelete = lodash_1.dropRight(images, limit);
            try {
                for (const img of imagesToDelete) {
                    await fs.unlink(img.path);
                }
            }
            catch (e) {
                console.log(e);
            }
            await this.imgRepository.delete(imagesToDelete.map(img => img.id));
        }
    }
};
ImgService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_img_entity_1.ContentImg)),
    __param(1, typeorm_1.InjectRepository(content_img_field_entity_1.ContentImgField)),
    __param(2, common_1.Inject(common_1.forwardRef(() => screen_service_1.ScreenService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        screen_service_1.ScreenService,
        typeorm_2.Connection,
        config_1.ConfigService])
], ImgService);
exports.ImgService = ImgService;
//# sourceMappingURL=img.service.js.map