import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentMdField } from './md/content-md-field.entity';
import { ContentMd } from './md/content-md.entity';
import { TextModule } from './text/text.module';
import { ImgModule } from './img/img.module';
import { MdModule } from './md/md.module';
import { ScreenModule } from './screen/screen.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContentMdField,
      ContentMd,
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
