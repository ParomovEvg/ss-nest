import { ContentImg } from './content-img.entity';
import { ContentScreen } from '../screen/content-screen.entity';
export declare class ContentImgField {
    id: number;
    name: string;
    description: string;
    img: ContentImg[];
    screen: ContentScreen;
}
