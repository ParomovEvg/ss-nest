import { Request } from 'express';
import { Phone } from './phone/phone.entity';
export interface JwtRequest extends Request {
    user: Phone;
}
