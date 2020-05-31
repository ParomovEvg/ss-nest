import { ContentScreen } from './content-screen.entity';
import { Connection, Repository } from 'typeorm';
import { ChangeScreenNameDto, CreateScreenDto, FlatScreenDto } from './screen.dto';
import { Either } from 'useful-monads';
import { ScreenAlreadyExists, ScreenNotFoundById } from './screen.errors.dto';
import { ImgService } from '../img/img.service';
import { TextService } from '../text/text.service';
import { MdService } from '../md/md.service';
export declare class ScreenService {
    private screenRepository;
    private connection;
    private imgService;
    private textService;
    private mdService;
    constructor(screenRepository: Repository<ContentScreen>, connection: Connection, imgService: ImgService, textService: TextService, mdService: MdService);
    getAllScreensDeep(): Promise<ContentScreen[]>;
    findAll(): Promise<FlatScreenDto[]>;
    createScreen({ name, }: CreateScreenDto): Promise<Either<ScreenAlreadyExists, FlatScreenDto>>;
    getScreenById(id: number): Promise<Either<ScreenNotFoundById, ContentScreen>>;
    deleteScreen(id: number): Promise<Either<ScreenNotFoundById, {
        id: number;
    }>>;
    changeScreenName(screenId: number, changeScreenNameDto: ChangeScreenNameDto): Promise<Either<ScreenNotFoundById, FlatScreenDto>>;
}
