import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentText } from './content-text.entity';
import { Connection, Repository } from 'typeorm';
import { ContentTextField } from './content-text-field.entity';
import {
  CreateTextDto,
  CreateTextFieldDto,
  FlatTextFieldDto,
  TextDto,
  TextFieldDto,
  ChangeTextFieldDto,
} from './text.dto';
import { ScreenService } from '../screen/screen.service';
import { Either, left, right } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  createTextFieldAlreadyExists,
  createTextFieldNotFoundById,
  TextFieldAlreadyExists,
  TextFieldNotFoundById,
} from './text.errors.dto';
import { EitherAsync } from 'useful-monads/EitherAsync';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(ContentText)
    private textRepository: Repository<ContentText>,
    @InjectRepository(ContentTextField)
    private textFieldRepository: Repository<ContentTextField>,
    @Inject(forwardRef(() => ScreenService))
    private screenService: ScreenService,
    private connection: Connection,
  ) {}

  async createField({
    name,
    description,
    screenId,
  }: CreateTextFieldDto): Promise<
    Either<ScreenNotFoundById | TextFieldAlreadyExists, FlatTextFieldDto>
  > {
    return EitherAsync.from(this.screenService.getScreenById(screenId))
      .asyncChain(
        async (
          screen,
        ): Promise<Either<TextFieldAlreadyExists, FlatTextFieldDto>> => {
          const field = await this.textFieldRepository.findOne({
            where: { screen: screen, name: name, description: description },
          });
          if (field) {
            return left(
              createTextFieldAlreadyExists({
                screenId: screen.id,
                name: name,
              }),
            );
          } else {
            const textField = this.textFieldRepository.create();
            textField.name = name;
            textField.screen = screen;
            textField.description = description;
            return right(await this.textFieldRepository.save(textField));
          }
        },
      )
      .run();
  }

  async deleteTextField(
    fieldId: number,
  ): Promise<Either<TextFieldNotFoundById, { id: number }>> {
    return EitherAsync.from(this.getFieldById(fieldId))
      .asyncMap(async field => {
        await this.connection.transaction(async manager => {
          if (field.values.length)
            await manager
              .getRepository(ContentText)
              .delete(field.values.map(e => e.id));
          await manager.delete(ContentTextField, field);
        });
        return { id: fieldId };
      })
      .run();
  }

  async updateTextField(
    changeField: ChangeTextFieldDto,
    fieldId: string,
  ): Promise<Either<TextFieldNotFoundById, FlatTextFieldDto>> {
    const field = await this.textFieldRepository.findOne({
      where: { id: fieldId },
    });
    if (field) {
      field.name = changeField.name;
      field.description = changeField.description;
      return right(await this.textFieldRepository.save(field));
    } else {
      return left(createTextFieldNotFoundById({ id: field.id }));
    }
  }

  async findTextFieldById(
    fieldId: number,
  ): Promise<Either<TextFieldNotFoundById, TextFieldDto>> {
    return this.getFieldById(fieldId).then(r =>
      r.map(filed => ({
        ...filed,
        values: filed.values.map(value => ({
          ...value,
          createDate: value.createDate.toISOString(),
        })),
      })),
    );
  }
  async createText({
    value,
    fieldId,
  }: CreateTextDto): Promise<Either<TextFieldNotFoundById, TextDto>> {
    return EitherAsync.from(this.getFieldById(fieldId))
      .asyncMap(async field => {
        const text = this.textRepository.create();
        text.value = value;
        text.field = field;
        const result = await this.textRepository.save(text);
        return { ...result, createDate: result.createDate.toISOString() };
      })
      .run();
  }

  private async getFieldById(
    fieldId: number,
  ): Promise<Either<TextFieldNotFoundById, ContentTextField>> {
    const field = await this.textFieldRepository.findOne({
      where: { id: fieldId },
      relations: ['values'],
    });

    if (field) {
      return right(field);
    } else {
      return left(createTextFieldNotFoundById({ id: fieldId }));
    }
  }
}
