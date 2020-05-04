import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { HomeScreenModule } from './home-screen/home-screen.module';

@Module({
  imports: [ HomeScreenModule],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
