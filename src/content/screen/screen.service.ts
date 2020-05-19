import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentScreen } from './content-screen.entity';
import { Repository } from 'typeorm';
import {
  CreateScreenDto,
  FindAllScreensResDto,
  FlatScreenDto,
} from './screen.dto';
import { Either, left, right } from 'useful-monads';
import {
  createScreenAlreadyExists,
  createScreenNotFoundById,
  ScreenAlreadyExists,
  ScreenNotFoundById,
} from './screen.errors.dto';

@Injectable()
export class ScreenService {
  constructor(
    @InjectRepository(ContentScreen)
    private screenRepository: Repository<ContentScreen>,
  ) {}

  async getAllScreensDeep(): Promise<ContentScreen[]> {
    return this.screenRepository.find({
      relations: [
        'textFields',
        'textFields.values',
        'imgFields',
        'imgFields.img',
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
      ],
    });
    if (screen) {
      return right(screen);
    } else {
      return left(createScreenNotFoundById({ id }));
    }
  }
}
