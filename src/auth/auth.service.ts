import { Injectable } from '@nestjs/common';
import { PhoneService } from '../phone/phone.service';
import { PasswordService } from '../phone/password/password.service';
import { CreatePhoneDto } from '../phone/dto/CreatePhoneDto';
import { JwtService } from '@nestjs/jwt';
import { Phone } from '../phone/entities/phone.entity';

@Injectable()
export class AuthService {
  constructor(
    private phoneService: PhoneService,
    private passwordService: PasswordService,
    private jwtService: JwtService
  ) {}

  async validate(createPhoneDto: CreatePhoneDto) {
    const phoneEither = await this.phoneService.findPhone(createPhoneDto);
    return phoneEither.asyncChain(phone =>
      this.passwordService.checkPhonePassword(phone, createPhoneDto),
    );
  }

  async login(phone: Phone) {
    const payload = { phone: phone.phone, sub: phone.id };
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}
