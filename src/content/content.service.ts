import { Injectable } from '@nestjs/common';
import { ScreenService } from './screen/screen.service';
import { ScreenContentDto } from './screen/screen.dto';
import { last } from 'lodash';

@Injectable()
export class ContentService {
  constructor(private screenService: ScreenService) {}
  async getContent(): Promise<ScreenContentDto[]> {
    const screens = await this.screenService.getAll();
    return screens.map<ScreenContentDto>(screen => ({
      ...screen,
      textFields: screen.textFields.map(({ values, ...rest }) => ({
        ...rest,
        value: last(values),
      })),
    }));
  }
}
