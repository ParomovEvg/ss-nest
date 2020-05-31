import { Strategy } from 'passport-jwt';
import { PhoneService } from '../phone/phone.service';
import { Phone } from '../phone/phone.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly phoneService;
    constructor(phoneService: PhoneService);
    validate(payload: any): Promise<Phone>;
}
export {};
