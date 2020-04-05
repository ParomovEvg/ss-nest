import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import Either from '@sweet-monads/either';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: "phone"});
    console.log(this)
  }

  async validate(phone:string, password: string) {
    const result = (await this.authService.validate({phone, password})).chain(phone => {
      if(phone){
        return Either.right(phone);
      } else {
        return Either.left(new UnauthorizedException())
      }
    });
    if(result.value instanceof UnauthorizedException){
      throw result.value
    } else {
      return result.value
    }
  }
}
