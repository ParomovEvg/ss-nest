import { Strategy } from 'passport-jwt';
import { PhoneService } from '../phone/phone.service';
import { Phone } from '../phone/phone.entity';
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private readonly phoneService;
    constructor(phoneService: PhoneService);
    validate(payload: any): Promise<Phone>;
}
export {};
