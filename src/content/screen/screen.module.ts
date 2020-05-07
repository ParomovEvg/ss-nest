import { Module } from '@nestjs/common';
import { ScreenController } from './screen.controller';
import { ScreenService } from './screen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentScreen } from './content-screen.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ContentScreen])],
  controllers: [ScreenController],
  providers: [ScreenService],
  exports:[ScreenService]
})
export class ScreenModule {}
