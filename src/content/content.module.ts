import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentScreen } from './screen/content-screen.entity';
import { ContentText } from './text/content-text.entity';
import { ContentTextField } from './text/content-text-field.entity';
import { ContentMdField } from './md/content-md-field.entity';
import { ContentImgField } from './img/content-img-field.entity';
import { ContentMd } from './md/content-md.entity';
import { ContentImg } from './img/content-img.entity';
import { TextModule } from './text/text.module';
import { ImgModule } from './img/img.module';
import { MdModule } from './md/md.module';
import { ScreenModule } from './screen/screen.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentMdField,
      ContentImgField,
      ContentMd,
      ContentImg,
    ]),
    TextModule,
    ImgModule,
    MdModule,
    ScreenModule,
  ],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
