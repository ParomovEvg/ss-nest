import {  Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentText } from './text/content-text.entity';
import { ContentImg } from './img/content-img.entity';
import { ContentMd } from './md/content-md.entity';
import { ContentTextField } from './text/content-text-field.entity';
import { ContentImgField } from './img/content-img-field.entity';
import { ContentMdField } from './md/content-md-field.entity';
import { ContentScreen } from './screen/content-screen.entity';
import { ScreenController } from './screen/screen.controller';
import { ImgController } from './img/img.controller';
import { MdController } from './md/md.controller';
import { TextController } from './text/text.controller';
import { ScreenService } from './screen/screen.service';
import { TextService } from './text/text.service';
import { ImgService } from './img/img.service';
import { MdService } from './md/md.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentText,
      ContentImg,
      ContentMd,
      ContentTextField,
      ContentImgField,
      ContentMdField,
      ContentScreen,
    ]),
  ],
  controllers: [
    ContentController,
    ScreenController,
    ImgController,
    MdController,
    TextController,
  ],
  providers: [
    ContentService,
    ScreenService,
    TextService,
    ImgService,
    MdService,
  ],
})
export class ContentModule {}
