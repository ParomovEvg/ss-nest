import { forwardRef, Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentImg } from './content-img.entity';
import { Connection, Repository } from 'typeorm';
import { ContentImgField } from './content-img-field.entity';
import { ScreenService } from '../screen/screen.service';
import { Either, left, right } from 'useful-monads';
import { ScreenNotFoundById } from '../screen/screen.errors.dto';
import {
  FlatImgFieldDto,
  ImgDto,
  ChangeImgField,
  ImgFieldDto,
} from './img.dto';
import {
  createImgFieldAlreadyExistsInScreen,
  createImgFieldNotFoundById,
  createImgNotFoundById,
  createImgNotFoundByIdInField,
  createImgVersionBeforeNotFound,
  ImgFieldAlreadyExistsInScreen,
  ImgFieldNotFoundById,
  ImgNotFoundById,
  ImgNotFoundByIdInField,
  ImgVersionBeforeNotFound,
} from './img.errors.dto';
import { ContentScreen } from '../screen/content-screen.entity';
import { EitherAsync } from 'useful-monads/EitherAsync';
import { hostname } from 'os';
import { dropRight, last } from 'lodash';
const fs = require('fs').promises;
import * as Path from 'path';
import { URL } from 'url';
import { ConfigService } from '@nestjs/config';
import { v4 } from 'uuid';

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(ContentImg)
    private imgRepository: Repository<ContentImg>,
    @InjectRepository(ContentImgField)
    private imgFieldRepository: Repository<ContentImgField>,
    @Inject(forwardRef(() => ScreenService))
    private screenService: ScreenService,
    private connection: Connection,
    private configService: ConfigService,
  ) {
    this.imgRepository.find().then(images => {
      const host = hostname();
      this.imgRepository
        .delete(images.filter(img => img.host !== host).map(img => img.id))
        .catch(e => console.log(e))
        .then(() => {
          return fs.readdir(
            Path.format({
              dir: 'uploads',
            }),
          );
        })
        .then((names: string[]) =>
          names
            .map(name =>
              Path.format({
                dir: 'uploads',
                base: name,
              }),
            )
            .filter(path => !images.find(img => img.path === path)),
        )
        .then((paths: string[]) => {
          paths.forEach(path => {
            fs.unlink(path);
          });
        });
    });
  }

  async findFields() {
    return this.imgFieldRepository.find({ relations: ['img'] });
  }

  async createImgField(
    screenId: number,
    name: string,
    description: string,
  ): Promise<
    Either<ScreenNotFoundById | ImgFieldAlreadyExistsInScreen, FlatImgFieldDto>
  > {
    return EitherAsync.from(this.screenService.getScreenById(screenId))
      .asyncChain(screen => this.checkFieldName(name, screen))
      .asyncMap(async screen => {
        const field = this.imgFieldRepository.create();
        field.screen = screen;
        field.description = description;
        field.name = name;
        return this.imgFieldRepository
          .save(field)
          .then(({ screen, ...field }) => ({ ...field }));
      })
      .run();
  }

  async deleteImgField(
    fieldId: number,
  ): Promise<Either<ImgFieldNotFoundById, { id: number }>> {
    return EitherAsync.from(this.findFiledById(fieldId))
      .asyncMap(async field => {
        await this.connection.transaction(async manager => {
          if (field.img.length) {
            await manager
              .getRepository(ContentImg)
              .delete(field.img.map(img => img.id));
          }
          await manager.getRepository(ContentImgField).delete(field);
          for (const img of field.img) {
            await fs.unlink(img.path);
          }
        });
        return { id: field.id };
      })
      .run();
  }

  async updateImgField(
    changeField: ChangeImgField,
    fieldId: string,
  ): Promise<Either<ImgFieldNotFoundById, ImgFieldDto>> {
    const field = await this.imgFieldRepository.findOne({
      where: { id: fieldId },
    });
    if (field) {
      field.name = changeField.name;
      field.description = changeField.description;
      return right(await this.imgFieldRepository.save(field));
    } else {
      return left(createImgFieldNotFoundById({ id: field.id }));
    }
  }

  async createImg(
    fieldId: number,
    path: string,
  ): Promise<Either<ImgFieldNotFoundById, ContentImg>> {
    return EitherAsync.from(this.findFiledById(fieldId))
      .asyncChain(async field => {
        await this.deleteIfMoreThenLimit(field, 2);
        return this.findFiledById(field.id);
      })
      .asyncMap(field => {
        const url = new URL(path, this.configService.get<string>('IMG_BASE'));
        const img = this.imgRepository.create();
        img.field = field;
        img.url = url.toString();
        img.path = path;
        img.host = hostname();

        return this.imgRepository.save(img);
      })
      .run();
  }

  saveImgLast(imgId): Promise<Either<ImgNotFoundById, ImgDto>> {
    return EitherAsync.from(this.findImg(imgId))
      .asyncMap(async img => {
        const newImg = this.imgRepository.create();
        const ext = last(img.path.split('.'));
        const newPath = 'uploads/' + v4() + '.' + ext;
        await fs.copyFile(img.path, newPath);
        const url = new URL(
          newPath,
          this.configService.get<string>('IMG_BASE'),
        );
        newImg.field = img.field;
        newImg.url = url.toString();
        newImg.path = newPath;
        newImg.host = hostname();
        await this.deleteIfMoreThenLimit(img.field, 2);
        const copyImg = await this.imgRepository.save(newImg);
        delete copyImg.field;
        return copyImg;
      })
      .run();
  }

  async getImageBefore(
    fieldId: number,
    imgId: number,
  ): Promise<
    Either<
      ImgFieldNotFoundById | ImgNotFoundByIdInField | ImgVersionBeforeNotFound,
      ImgDto
    >
  > {
    return EitherAsync.from(this.findFiledById(fieldId))
      .asyncChain(async field => this.findImgByIdInField(imgId, field))
      .asyncChain(([img, field]) => this.getImageBeforeImage(img, field))
      .run();
  }

  async getImageBeforeImage(
    img: ContentImg,
    field: ContentImgField,
  ): Promise<Either<ImgVersionBeforeNotFound, ImgDto>> {
    const index = field.img.findIndex(r => r.id === img.id) - 1;
    if (index < 0) {
      return left(
        createImgVersionBeforeNotFound({
          fieldId: field.id,
          imgId: img.id,
        }),
      );
    } else {
      return right(field.img[index]);
    }
  }

  async findFiledById(
    id: number,
  ): Promise<Either<ImgFieldNotFoundById, ContentImgField>> {
    const imgField = await this.imgFieldRepository.findOne({
      where: { id: id },
      relations: ['img'],
    });
    if (imgField) {
      return right(imgField);
    } else {
      return left(createImgFieldNotFoundById({ id }));
    }
  }

  async findImgByIdInField(
    imgId: number,
    field: ContentImgField,
  ): Promise<Either<ImgNotFoundByIdInField, [ContentImg, ContentImgField]>> {
    const img = await this.imgRepository.findOne({ where: { id: imgId } });
    const res = field.img.find(r => r.id === img.id);
    if (res) {
      return right([img, field]);
    } else {
      return left(
        createImgNotFoundByIdInField({ imgId: imgId, fieldId: field.id }),
      );
    }
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

  async findImg(imgId: number): Promise<Either<ImgNotFoundById, ContentImg>> {
    const img = await this.imgRepository.findOne({
      where: { id: imgId },
      relations: ['field', 'field.img'],
    });
    if (img) {
      return right(img);
    } else {
      return left(createImgNotFoundById({ id: imgId }));
    }
  }
  async deleteIfMoreThenLimit(field: ContentImgField, limit: number) {
    const images = field.img;
    if (images.length > limit) {
      const imagesToDelete = dropRight(images, limit);
      try {
        for (const img of imagesToDelete) {
          await fs.unlink(img.path);
        }
      } catch (e) {
        console.log(e);
      }
      await this.imgRepository.delete(imagesToDelete.map(img => img.id));
    }
  }
}
