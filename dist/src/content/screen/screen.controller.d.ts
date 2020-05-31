import { ChangeScreenNameDto, ChangeScreenNameResDto, CreateScreenDto, CreateScreenResDto, DeleteScreenResDto, FindAllScreensResDto, FindScreenByIdResDto } from './screen.dto';
import { ScreenService } from './screen.service';
export declare class ScreenController {
    private screenService;
    constructor(screenService: ScreenService);
    createScreen(createScreenDto: CreateScreenDto): Promise<CreateScreenResDto>;
    findAllScreens(): Promise<FindAllScreensResDto>;
    findScreenById(screenId: number): Promise<FindScreenByIdResDto>;
    deleteScreenById(screenId: number): Promise<DeleteScreenResDto>;
    changeScreenName(screenId: number, changeScreenNameDto: ChangeScreenNameDto): Promise<ChangeScreenNameResDto>;
}
