import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { PhoneService } from '../phone/phone.service';
import { Phone } from '../phone/phone.entity';
import { EitherAsync } from 'useful-monads/EitherAsync';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor(private readonly phoneService: PhoneService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any): Promise<Phone> {
    if (!payload?.phone) {
      throw new UnauthorizedException();
    }
    const res = await EitherAsync.from(
      this.phoneService.findPhone(payload.phone),
    ).extract();
    if (res.left) {
      throw res.left;
    } else if (res.right && res.right.isAdmin) {
      return res.right;
    } else {
      throw new UnauthorizedException();
    }
  }
}
