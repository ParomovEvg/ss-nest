import { Module } from '@nestjs/common';
import { MdController } from './md.controller';
import { MdService } from './md.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentMdField } from './content-md-field.entity';
import { ContentMd } from './content-md.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentMdField, ContentMd])],
  controllers: [MdController],
  providers: [MdService],
})
export class MdModule {}
