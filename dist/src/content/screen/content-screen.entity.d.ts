import { ContentMdField } from '../md/content-md-field.entity';
import { ContentTextField } from '../text/content-text-field.entity';
import { ContentImgField } from '../img/content-img-field.entity';
export declare class ContentScreen {
    id: number;
    name: string;
    description: string;
    textFields: ContentTextField[];
    mdFields: ContentMdField[];
    imgFields: ContentImgField[];
}
