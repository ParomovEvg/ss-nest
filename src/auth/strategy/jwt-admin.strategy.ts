import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { PhoneService } from '../phone/phone.service';
import { Phone } from '../phone/phone.entity';

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
    let error, phone:Phone;
    const phoneEither = await this.phoneService.findPhone(payload.phone);
    phoneEither.mapRight(r => (phone = r)).mapLeft(e => (error = e));
    if (error) {
      throw error;
    } else if (phone && phone.isAdmin) {
      return phone;
    } else {
      throw new UnauthorizedException();
    }
  }
}
