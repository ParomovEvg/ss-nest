import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controller/auth.controller';
import { PasswordService } from './password-service/password.service';
import { PhoneService } from './phone-service/phone.service';
import { Phone } from './entities/phone.entity';
import { Password } from './entities/password.entity';
import { JwtAdminStrategy } from './strategy/jwt-admin.strategy';


@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy,JwtAdminStrategy, PasswordService, PhoneService],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1160s' },
    }),
    TypeOrmModule.forFeature([Phone, Password]),
  ],
  exports: [AuthService, PhoneService, PasswordService, TypeOrmModule],
  controllers: [AuthController]
})
export class AuthModule {}
