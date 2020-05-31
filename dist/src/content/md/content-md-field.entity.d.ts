import { ContentMd } from './content-md.entity';
import { ContentScreen } from '../screen/content-screen.entity';
export declare class ContentMdField {
    id: number;
    name: string;
    label: string;
    values: ContentMd[];
    screen: ContentScreen;
}
