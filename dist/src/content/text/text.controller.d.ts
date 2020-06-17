import { CreateTextDto, CreateTextFieldDto, CreateTextFieldResDto, CreateTextResDto, DeleteTextFieldResDto, FindTextOfFieldResDto, ChangeTextFieldDto, ChangeTextFieldResDto } from './text.dto';
import { TextService } from './text.service';
export declare class TextController {
    private textService;
    constructor(textService: TextService);
    createField(createTextFieldDto: CreateTextFieldDto): Promise<CreateTextFieldResDto>;
    createText(createTextDto: CreateTextDto): Promise<CreateTextResDto>;
    findTextOfFiled(fieldId: number): Promise<FindTextOfFieldResDto>;
    updateTextField(changeField: ChangeTextFieldDto, fieldId: string): Promise<ChangeTextFieldResDto>;
    deleteTextField(fieldId: number): Promise<DeleteTextFieldResDto>;
}
