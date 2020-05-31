import { ContentText } from './content-text.entity';
import { Connection, Repository } from 'typeorm';
import { ContentTextField } from './content-text-field.entity';
import { CreateTextDto, CreateTextFieldDto, FlatTextFieldDto, TextDto, TextFieldDto } from './text.dto';
import { ScreenService } from '../screen/screen.service';
import { Either } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { TextFieldAlreadyExists, TextFieldNotFoundById } from './text.errors.dto';
export declare class TextService {
    private textRepository;
    private textFieldRepository;
    private screenService;
    private connection;
    constructor(textRepository: Repository<ContentText>, textFieldRepository: Repository<ContentTextField>, screenService: ScreenService, connection: Connection);
    createField({ name, screenId, }: CreateTextFieldDto): Promise<Either<ScreenNotFoundById | TextFieldAlreadyExists, FlatTextFieldDto>>;
    deleteTextField(fieldId: number): Promise<Either<TextFieldNotFoundById, {
        id: number;
    }>>;
    findTextFieldById(fieldId: number): Promise<Either<TextFieldNotFoundById, TextFieldDto>>;
    createText({ value, fieldId, }: CreateTextDto): Promise<Either<TextFieldNotFoundById, TextDto>>;
    private getFieldById;
}
