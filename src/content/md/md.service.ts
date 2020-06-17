import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentMdField } from './content-md-field.entity';
import { Connection, Repository } from 'typeorm';
import { ContentMd } from './content-md.entity';
import { Either, left, right } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  createMdFieldAlreadyExistInScreen,
  createMdFieldNotFoundById,
  MdFieldAlreadyExistInScreen,
  MdFieldNotFoundById,
} from './md.errors.dto';
import {
  CreateMdDto,
  CreateMdFieldDto,
  FlatMdFieldDto,
  MdDto,
  MdFieldDto,
} from './md.dto';
import { ScreenService } from '../screen/screen.service';
import { EitherAsync } from 'useful-monads/EitherAsync';

@Injectable()
export class MdService {
  constructor(
    @InjectRepository(ContentMdField)
    private mdFieldRepository: Repository<ContentMdField>,
    @InjectRepository(ContentMd)
    private mdRepository: Repository<ContentMd>,
    @Inject(forwardRef(() => ScreenService))
    private screenService: ScreenService,
    private connection: Connection,
  ) {}

  async createMdField(
    createMdFieldDto: CreateMdFieldDto,
  ): Promise<
    Either<ScreenNotFoundById | MdFieldAlreadyExistInScreen, FlatMdFieldDto>
  > {
    return EitherAsync.from(
      this.screenService.getScreenById(createMdFieldDto.screenId),
    )
      .asyncChain(
        async (
          screen,
        ): Promise<Either<MdFieldAlreadyExistInScreen, FlatMdFieldDto>> => {
          const fields = await this.mdFieldRepository.find({
            where: { screen },
          });
          if (fields.some(field => field.name === createMdFieldDto.name)) {
            return left(
              createMdFieldAlreadyExistInScreen({
                screenId: screen.id,
                name: createMdFieldDto.name,
              }),
            );
          } else {
            const newField = this.mdFieldRepository.create();
            newField.name = createMdFieldDto.name;
            newField.label = createMdFieldDto.label;
            newField.screen = screen;
            const field = await this.mdFieldRepository.save(newField);
            delete field.screen;
            return right(field);
          }
        },
      )
      .run();
  }

  async createMd(
    createMdDto: CreateMdDto,
  ): Promise<Either<MdFieldNotFoundById, MdDto>> {
    return EitherAsync.from(this.findMdField(createMdDto.fieldId))
      .asyncMap(async field => {
        console.log(field);
        const md = this.mdRepository.create();
        md.value = createMdDto.value;
        md.field = field;
        const newMd = await this.mdRepository.save(md);
        delete newMd.field;
        return newMd;
      })
      .run();
  }

  async deleteMdField(
    fieldId: number,
  ): Promise<Either<MdFieldNotFoundById, { id: number }>> {
    return EitherAsync.from(this.findMdField(fieldId))
      .asyncMap(async field => {
        await this.connection.transaction(async mr => {
          if (field.values.length) {
            await mr
              .getRepository(ContentMd)
              .delete(field.values.map(value => value.id));
          }
          await mr.getRepository(ContentMdField).delete(field);
        });
        return { id: field.id };
      })
      .run();
  }

  async findField(
    fieldId: number,
  ): Promise<Either<MdFieldNotFoundById, MdFieldDto>> {
    return this.findMdField(fieldId);
  }

  async findMdField(
    fieldId: number,
  ): Promise<Either<MdFieldNotFoundById, ContentMdField>> {
    const field = await this.mdFieldRepository.findOne({
      where: { id: fieldId },
      relations: ['values'],
    });
    if (field) {
      return right(field);
    } else {
      return left(createMdFieldNotFoundById({ fieldId: fieldId }));
    }
  }
}
