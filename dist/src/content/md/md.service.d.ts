import { ContentMdField } from './content-md-field.entity';
import { Connection, Repository } from 'typeorm';
import { ContentMd } from './content-md.entity';
import { Either } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { MdFieldAlreadyExistInScreen, MdFieldNotFoundById } from './md.errors.dto';
import { CreateMdDto, CreateMdFieldDto, FlatMdFieldDto, MdDto, MdFieldDto } from './md.dto';
import { ScreenService } from '../screen/screen.service';
export declare class MdService {
    private mdFieldRepository;
    private mdRepository;
    private screenService;
    private connection;
    constructor(mdFieldRepository: Repository<ContentMdField>, mdRepository: Repository<ContentMd>, screenService: ScreenService, connection: Connection);
    createMdField(createMdFieldDto: CreateMdFieldDto): Promise<Either<ScreenNotFoundById | MdFieldAlreadyExistInScreen, FlatMdFieldDto>>;
    createMd(createMdDto: CreateMdDto): Promise<Either<MdFieldNotFoundById, MdDto>>;
    deleteMdField(fieldId: number): Promise<Either<MdFieldNotFoundById, {
        id: number;
    }>>;
    findField(fieldId: number): Promise<Either<MdFieldNotFoundById, MdFieldDto>>;
    findMdField(fieldId: number): Promise<Either<MdFieldNotFoundById, ContentMdField>>;
}
