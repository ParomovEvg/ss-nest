import { Injectable } from '@nestjs/common';
import { PhoneService } from './phone/phone.service';
import { PasswordService } from './password/password.service';
import { JwtService } from '@nestjs/jwt';
import { Phone } from './phone/phone.entity';
import { CreatePhoneDto } from './phone/phone.dto';
import { EitherAsync } from 'useful-monads/EitherAsync';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private phoneService: PhoneService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async validate(loginDto: LoginDto) {
    return EitherAsync.from(this.phoneService.findPhone(loginDto))
      .asyncChain(phone =>
        this.passwordService.checkPhonePassword(phone, loginDto),
      )
      .run();
  }

  async login(phone: Phone) {
    const payload = { phone: phone.phone, sub: phone.id };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}
