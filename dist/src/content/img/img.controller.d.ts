import { CreateImgFieldDto, CreateImgFieldResDto, CreateImgResDto, DeleteImgFieldResDto, FindImgFieldByIdResDto, GetImgBeforeResDto, SaveImgLastDto, SaveImgLastResDto, ChangeImgField, UpdateImgFieldResDto } from './img.dto';
import { ImgService } from './img.service';
export declare class ImgController {
    private imgService;
    constructor(imgService: ImgService);
    createImgField({ name, screenId, description }: CreateImgFieldDto): Promise<CreateImgFieldResDto>;
    deleteImgField(fieldId: number): Promise<DeleteImgFieldResDto>;
    findFieldById(fieldId: number): Promise<FindImgFieldByIdResDto>;
    updateTextField(changeField: ChangeImgField, fieldId: string): Promise<UpdateImgFieldResDto>;
    uploadFile(file: {
        path: string;
    }, fieldId: number): Promise<CreateImgResDto>;
    getImgBefore(filedId: number, imgId: number): Promise<GetImgBeforeResDto>;
    saveImgBefore(saveImgLastDto: SaveImgLastDto): Promise<SaveImgLastResDto>;
}
