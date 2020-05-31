import { ChangeDrawDto, ChangeDrawResDto, CreateDrawDto, CreateDrawNextDto, CreateDrawResDto, DeleteDrawDto, DeleteDrawResDto, FindAllDrawResDto, FindFullDrawDto, FindFullDrawResDto, FindNowDrawResDto } from './draw.dto';
import { DrawService } from './draw.service';
export declare class DrawController {
    private drawService;
    constructor(drawService: DrawService);
    findAll(): Promise<FindAllDrawResDto>;
    findDrawWithQrs(findFullDrawDto: FindFullDrawDto): Promise<FindFullDrawResDto>;
    findNow(): Promise<FindNowDrawResDto>;
    createDraw(createDrawDto: CreateDrawDto): Promise<CreateDrawResDto>;
    createDrawNext(createDrawNextDto: CreateDrawNextDto): Promise<CreateDrawResDto>;
    deleteDraw(deleteDrawDto: DeleteDrawDto): Promise<DeleteDrawResDto>;
    changeDrawSalary(changeDrawSalaryLimitDto: ChangeDrawDto, id: number): Promise<ChangeDrawResDto>;
}
