import { ContentText } from './content-text.entity';
import { ContentScreen } from '../screen/content-screen.entity';
export declare class ContentTextField {
    id: number;
    name: string;
    description: string;
    values: ContentText[];
    screen: ContentScreen;
}
