import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhoneModule } from '../phone/phone.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, LocalStrategy,JwtStrategy ],
  imports: [
    PhoneModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
