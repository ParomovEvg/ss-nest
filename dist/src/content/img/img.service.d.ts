import { ContentImg } from './content-img.entity';
import { Connection, Repository } from 'typeorm';
import { ContentImgField } from './content-img-field.entity';
import { ScreenService } from '../screen/screen.service';
import { Either } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { FlatImgFieldDto, ImgDto } from './img.dto';
import { ImgFieldAlreadyExistsInScreen, ImgFieldNotFoundById, ImgNotFoundById, ImgNotFoundByIdInField, ImgVersionBeforeNotFound } from './img.errors.dto';
import { ContentScreen } from '../screen/content-screen.entity';
import { ConfigService } from '@nestjs/config';
export declare class ImgService {
    private imgRepository;
    private imgFieldRepository;
    private screenService;
    private connection;
    private configService;
    constructor(imgRepository: Repository<ContentImg>, imgFieldRepository: Repository<ContentImgField>, screenService: ScreenService, connection: Connection, configService: ConfigService);
    findFields(): Promise<ContentImgField[]>;
    createImgField(screenId: number, name: string): Promise<Either<ScreenNotFoundById | ImgFieldAlreadyExistsInScreen, FlatImgFieldDto>>;
    deleteImgField(fieldId: number): Promise<Either<ImgFieldNotFoundById, {
        id: number;
    }>>;
    createImg(fieldId: number, path: string): Promise<Either<ImgFieldNotFoundById, ContentImg>>;
    saveImgLast(imgId: any): Promise<Either<ImgNotFoundById, ImgDto>>;
    getImageBefore(fieldId: number, imgId: number): Promise<Either<ImgFieldNotFoundById | ImgNotFoundByIdInField | ImgVersionBeforeNotFound, ImgDto>>;
    getImageBeforeImage(img: ContentImg, field: ContentImgField): Promise<Either<ImgVersionBeforeNotFound, ImgDto>>;
    findFiledById(id: number): Promise<Either<ImgFieldNotFoundById, ContentImgField>>;
    findImgByIdInField(imgId: number, field: ContentImgField): Promise<Either<ImgNotFoundByIdInField, [ContentImg, ContentImgField]>>;
    checkFieldName(name: string, screen: ContentScreen): Promise<Either<ImgFieldAlreadyExistsInScreen, ContentScreen>>;
    findImg(imgId: number): Promise<Either<ImgNotFoundById, ContentImg>>;
    deleteIfMoreThenLimit(field: ContentImgField, limit: number): Promise<void>;
}
