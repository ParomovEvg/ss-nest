import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { PhoneService } from '../phone-service/phone.service';
import { Phone } from '../entities/phone.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly phoneService: PhoneService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any): Promise<Phone> {
    let error, phone;
    const phoneEither = await this.phoneService.findPhone(payload.phone);
    phoneEither.mapRight(r => (phone = r)).mapLeft(e => (error = e));
    if (error) {
      throw error;
    } else if (phone) {
      return phone;
    } else {
      throw new UnauthorizedException();
    }
  }
}
