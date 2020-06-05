import { Injectable } from '@nestjs/common';
import { ScreenService } from './screen/screen.service';
import { ScreenContentDto } from './screen/screen.dto';
import { first } from 'lodash';

@Injectable()
export class ContentService {
  constructor(private screenService: ScreenService) {}
  async getContent(): Promise<ScreenContentDto[]> {
    const screens = await this.screenService.getAllScreensDeep();
    console.log(screens);
    return screens.map<ScreenContentDto>(screen => ({
      ...screen,
      textFields: screen.textFields.map(({ values, ...rest }) => ({
        ...rest,
        value: first(values),
      })),
      imgFields: screen.imgFields.map(({ img, ...rest }) => ({
        ...rest,
        img: first(img),
      })),
      mdFields: screen.mdFields.map(({ values, ...rest }) => ({
        ...rest,
        value: first(values),
      })),
    }));
  }
}
