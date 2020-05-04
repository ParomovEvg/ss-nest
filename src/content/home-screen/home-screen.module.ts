import { Module } from '@nestjs/common';
import { HomeScreenService } from './home-screen.service';
import { HomeScreenController } from './home-screen.controller';

@Module({
  providers: [HomeScreenService],
  controllers: [HomeScreenController]
})
export class HomeScreenModule {}
