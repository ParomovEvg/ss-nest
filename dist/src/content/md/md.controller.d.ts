import { CreateMdDto, CreateMdFieldDto, CreateMdFieldResDto, CreateMdResDto, DeleteMdFieldResDto } from './md.dto';
import { MdService } from './md.service';
export declare class MdController {
    private mdService;
    constructor(mdService: MdService);
    findMdField(fieldId: number): Promise<{
        payload?: import("./content-md-field.entity").ContentMdField;
    } & {
        MdFieldNotFoundById: import("./md.errors.dto").MdFieldNotFoundById;
    }>;
    createMdField(createMdField: CreateMdFieldDto): Promise<CreateMdFieldResDto>;
    deleteMdField(fieldId: number): Promise<DeleteMdFieldResDto>;
    createMd(createMdDto: CreateMdDto): Promise<CreateMdResDto>;
}
