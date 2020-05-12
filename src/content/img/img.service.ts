import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentImg } from './content-img.entity';
import { Repository } from 'typeorm';
import { ContentImgField } from './content-img-field.entity';
import { ScreenService } from '../screen/screen.service';
import { Either, left, right } from '@sweet-monads/either';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import { FlatImgFieldDto } from './img.dto';
import {
  createImgFieldAlreadyExistsInScreen,
  ImgFieldAlreadyExistsInScreen,
} from './img.errors.dto';
import { ContentScreen } from '../screen/content-screen.entity';
import { AsyncEither } from '../../asets/myEither/myMonad';

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(ContentImg)
    private imgRepository: Repository<ContentImg>,
    @InjectRepository(ContentImgField)
    private imgFieldRepository: Repository<ContentImgField>,
    private screenService: ScreenService,
  ) {}

  async createImgField(
    screenId: number,
    name: string,
  ): Promise<
    Either<ScreenNotFoundById | ImgFieldAlreadyExistsInScreen, FlatImgFieldDto>
  > {
    return new AsyncEither(this.screenService.getScreenById(screenId))
      .asyncChain(screen => this.checkFieldName(name, screen))
      .asyncMap(async screen => {
        const field = this.imgFieldRepository.create();
        field.screen = screen;
        field.name = name;
        return this.imgFieldRepository.save(field);
      })
      .run();
  }

  async checkFieldName(
    name: string,
    screen: ContentScreen,
  ): Promise<Either<ImgFieldAlreadyExistsInScreen, ContentScreen>> {
    const field = await this.imgFieldRepository.findOne({
      where: { name, screen },
    });
    if (field) {
      return left(
        createImgFieldAlreadyExistsInScreen({ name, screenId: screen.id }),
      );
    } else {
      return right(screen);
    }
  }
}
