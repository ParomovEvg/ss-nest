import { GetContentResDto } from './content.dto';
import { ContentService } from './content.service';
export declare class ContentController {
    private contentService;
    constructor(contentService: ContentService);
    getContent(): Promise<GetContentResDto>;
}
