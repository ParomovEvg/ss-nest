import { ContentImg } from '../content-img.entity';
export declare class ImgFileService {
    deleteFromFileSystem(img: ContentImg): Promise<ContentImg>;
}
