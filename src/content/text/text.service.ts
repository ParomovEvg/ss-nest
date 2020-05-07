import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentText } from './content-text.entity';
import { Repository } from 'typeorm';
import { ContentTextField } from './content-text-field.entity';
import {
  CreateTextDto,
  CreateTextFieldDto,
  FlatTextDto,
  FlatTextFieldDto,
} from './text.dto';
import { ScreenService } from '../screen/screen.service';
import { Either, left, right } from '@sweet-monads/either';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  createTextFieldAlreadyExists,
  createTextFieldNotFoundById,
  TextFieldAlreadyExists,
  TextFieldNotFoundById,
} from './text.errors.dto';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(ContentText)
    private textRepository: Repository<ContentText>,
    @InjectRepository(ContentTextField)
    private textFieldRepository: Repository<ContentTextField>,
    private screenService: ScreenService,
  ) {}

  async createField({
    name,
    screenId,
  }: CreateTextFieldDto): Promise<
    Either<ScreenNotFoundById | TextFieldAlreadyExists, FlatTextFieldDto>
  > {
    const screen = await this.screenService.getScreenById(screenId);
    return screen.asyncChain(async screen => {
      const field = await this.textFieldRepository.findOne({
        where: { screen: screen, name: name },
      });
      if (field) {
        return left(
          createTextFieldAlreadyExists({ screenId: screen.id, name: name }),
        );
      } else {
        const textField = this.textFieldRepository.create();
        textField.name = name;
        textField.screen = screen;
        return right(await this.textFieldRepository.save(textField));
      }
    });
  }

  async createText({
    value,
    fieldId,
  }: CreateTextDto): Promise<Either<TextFieldNotFoundById, FlatTextDto>> {
    const field = await this.getFieldById(fieldId);
    return field.asyncMap(async field => {
      const text = this.textRepository.create();
      text.value = value;
      text.field = field;
      const result = await this.textRepository.save(text);
      return { ...result, createDate: result.createDate.toISOString() };
    });
  }

  async findTextOfField(
    fieldId: number,
  ): Promise<Either<TextFieldNotFoundById, FlatTextDto[]>> {
    const field = await this.getFieldById(fieldId);
    return field.asyncMap(async filed => {
      const texts = await this.textRepository.find({
        where: { field: filed },
        relations: ['field', 'field.screen'],
      });
      return texts.map<FlatTextDto>(text => ({
        ...text,
        createDate: text.createDate.toISOString(),
      }));
    });
  }

  async getFieldById(
    fieldId: number,
  ): Promise<Either<TextFieldNotFoundById, ContentTextField>> {
    const field = await this.textFieldRepository.findOne({
      where:{id: fieldId},
      relations: ['screen'],
    });
    if (field) {
      return right(field);
    } else {
      return left(createTextFieldNotFoundById({ id: fieldId }));
    }
  }
}
