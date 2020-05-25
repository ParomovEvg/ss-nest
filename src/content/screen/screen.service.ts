import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentScreen } from './content-screen.entity';
import { Connection, Repository } from 'typeorm';
import {
  ChangeScreenNameDto,
  CreateScreenDto,
  FlatScreenDto,
} from './screen.dto';
import { Either, left, right } from 'useful-monads';
import {
  createScreenAlreadyExists,
  createScreenNotFoundById,
  ScreenAlreadyExists,
  ScreenNotFoundById,
} from './screen.errors.dto';
import { EitherAsync, mergeInOneAsync } from 'useful-monads/EitherAsync';
import { ImgService } from '../img/img.service';
import { TextService } from '../text/text.service';
import { MdService } from '../md/md.service';

@Injectable()
export class ScreenService {
  constructor(
    @InjectRepository(ContentScreen)
    private screenRepository: Repository<ContentScreen>,
    private connection: Connection,
    private imgService: ImgService,
    private textService: TextService,
    private mdService: MdService,
  ) {}

  async getAllScreensDeep(): Promise<ContentScreen[]> {
    return this.screenRepository.find({
      relations: [
        'textFields',
        'textFields.values',
        'imgFields',
        'imgFields.img',
        'mdFields',
        'mdFields.values',
      ],
    });
  }

  async findAll(): Promise<FlatScreenDto[]> {
    return this.screenRepository.find();
  }

  async createScreen({
    name,
  }: CreateScreenDto): Promise<Either<ScreenAlreadyExists, FlatScreenDto>> {
    const screen = await this.screenRepository.findOne({
      where: { name },
    });
    if (screen) {
      return left(createScreenAlreadyExists({ name }));
    } else {
      const newScreen = this.screenRepository.create();
      newScreen.name = name;
      return right(await this.screenRepository.save(newScreen));
    }
  }

  async getScreenById(
    id: number,
  ): Promise<Either<ScreenNotFoundById, ContentScreen>> {
    const screen = await this.screenRepository.findOne({
      where: { id: id },
      relations: [
        'textFields',
        'textFields.values',
        'imgFields',
        'imgFields.img',
        'mdFields',
        'mdFields.values',
      ],
    });
    if (screen) {
      return right(screen);
    } else {
      return left(createScreenNotFoundById({ id }));
    }
  }

  async deleteScreen(
    id: number,
  ): Promise<Either<ScreenNotFoundById, { id: number }>> {
    return EitherAsync.from(this.getScreenById(id))
      .asyncMap(async screen => {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          const res = await mergeInOneAsync([
            mergeInOneAsync(
              screen.imgFields.map(imgField =>
                this.imgService.deleteImgField(imgField.id),
              ),
            ).run(),
            mergeInOneAsync(
              screen.textFields.map(textField =>
                this.textService.deleteTextField(textField.id),
              ),
            ).run(),
            mergeInOneAsync(
              screen.mdFields.map(mdField =>
                this.mdService.deleteMdField(mdField.id),
              ),
            ).run(),
          ]).extract();
          if (res.left) {
            console.log(res.left);
            await queryRunner.rollbackTransaction();
            throw res.left;
          } else {
            await this.screenRepository.delete(screen);
            await queryRunner.commitTransaction();
            return { id: id };
          }
        } catch (err) {
          await queryRunner.rollbackTransaction();
          throw err;
        } finally {
          await queryRunner.release();
        }
      })
      .run();
  }
  async changeScreenName(
    screenId: number,
    changeScreenNameDto: ChangeScreenNameDto,
  ): Promise<Either<ScreenNotFoundById, FlatScreenDto>> {
    return EitherAsync.from(this.getScreenById(screenId))
      .asyncMap(async screen => {
        screen.name = changeScreenNameDto.name;
        await this.screenRepository.save(screen);
        return this.screenRepository.findOne({
          where: { id: screen.id },
          select: ['name', 'id'],
        });
      })
      .run();
  }
}
