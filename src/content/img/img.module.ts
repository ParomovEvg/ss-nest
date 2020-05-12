import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentImgField } from './content-img-field.entity';
import { ContentImg } from './content-img.entity';
import { ScreenModule } from '../screen/screen.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContentImgField, ContentImg]),
    ScreenModule,
  ],
  controllers: [ImgController],
  providers: [ImgService],
})
export class ImgModule {}
