import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';
import { Password } from './entities/password.entity';
import { PasswordService } from './password/password.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Phone, Password])],
  providers: [PhoneService, PasswordService],
  controllers: [PhoneController],
  exports: [PhoneService, PasswordService]
})
export class PhoneModule {}
