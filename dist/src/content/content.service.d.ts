import { ScreenService } from './screen/screen.service';
import { ScreenContentDto } from './screen/screen.dto';
export declare class ContentService {
    private screenService;
    constructor(screenService: ScreenService);
    getContent(): Promise<ScreenContentDto[]>;
}
