import { CreateImgFieldDto, CreateImgFieldResDto, CreateImgResDto, DeleteImgFieldResDto, FindImgFieldByIdResDto, GetImgBeforeResDto, SaveImgLastDto, SaveImgLastResDto } from './img.dto';
import { ImgService } from './img.service';
export declare class ImgController {
    private imgService;
    constructor(imgService: ImgService);
    createImgField({ name, screenId }: CreateImgFieldDto): Promise<CreateImgFieldResDto>;
    deleteImgField(fieldId: number): Promise<DeleteImgFieldResDto>;
    findFieldById(fieldId: number): Promise<FindImgFieldByIdResDto>;
    uploadFile(file: {
        path: string;
    }, fieldId: number): Promise<CreateImgResDto>;
    getImgBefore(filedId: number, imgId: number): Promise<GetImgBeforeResDto>;
    saveImgBefore(saveImgLastDto: SaveImgLastDto): Promise<SaveImgLastResDto>;
}
