import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { PasswordService } from './password/password.service';
import { PhoneService } from './phone/phone.service';
import { Phone } from './phone/phone.entity';
import { Password } from './password/password.entity';
import { JwtAdminStrategy } from './strategy/jwt-admin.strategy';
import { SendPasswordModule } from '../send-password/send-password.module';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtAdminStrategy,
    PasswordService,
    PhoneService,
  ],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Phone, Password]),
    SendPasswordModule,
  ],
  exports: [AuthService, PhoneService, PasswordService, TypeOrmModule],
  controllers: [AuthController],
})
export class AuthModule {}
