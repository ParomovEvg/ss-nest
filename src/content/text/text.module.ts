import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentTextField } from './content-text-field.entity';
import { ContentMdField } from '../md/content-md-field.entity';
import { ContentImgField } from '../img/content-img-field.entity';
import { ContentText } from './content-text.entity';
import { ContentMd } from '../md/content-md.entity';
import { ContentImg } from '../img/content-img.entity';
import { ScreenService } from '../screen/screen.service';
import { ScreenModule } from '../screen/screen.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContentTextField, ContentText]), ScreenModule],
  providers: [TextService],
  controllers: [TextController],
})
export class TextModule {}
