import { Draw } from './draw.entity';
import { Connection, Repository } from 'typeorm';
import { Either } from 'useful-monads';
import { DateNotValid, DatesAreTaken, DrawNotFoundById, EndEarlierThanStart, NotDrawNow } from './draw.errors.dto';
import { DateService } from '../date/date.service';
import { ChangeDrawDto, CreateDrawDto, CreateDrawNextDto, FindFullDrawDto, FlatDrawDto, FullDrawDto } from './draw.dto';
export declare class DrawService {
    private drawRepository;
    private dateService;
    private connection;
    constructor(drawRepository: Repository<Draw>, dateService: DateService, connection: Connection);
    findAllDraw(): Promise<Draw[]>;
    findNowDraw(): Promise<Either<NotDrawNow, Draw>>;
    findDraw(findFullDrawDto: FindFullDrawDto): Promise<Either<DrawNotFoundById, Draw>>;
    createDraw(createDrawDto: CreateDrawDto): Promise<Either<DatesAreTaken | EndEarlierThanStart | DateNotValid, Draw>>;
    createNextDraw(createDrawNextDto: CreateDrawNextDto): Promise<Either<DatesAreTaken | EndEarlierThanStart | DateNotValid, Draw, undefined>>;
    deleteDraw(id: number): Promise<Either<DrawNotFoundById, {
        id: number;
    }>>;
    changeDraw(changeDrawDto: ChangeDrawDto, id: number): Promise<Either<DrawNotFoundById, Draw>>;
    mapDrawToFlatDraw(d: Draw): FlatDrawDto;
    mapDrawToFullDraw(d: Draw): FullDrawDto;
    findDrawIdDrawId(id?: number): Promise<Either<DrawNotFoundById, Draw>>;
}
