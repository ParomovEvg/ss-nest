import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentTextField } from './content-text-field.entity';
import { ContentText } from './content-text.entity';
import { ScreenModule } from '../screen/screen.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContentTextField, ContentText]), ScreenModule],
  providers: [TextService],
  controllers: [TextController],
})
export class TextModule {}
