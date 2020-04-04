import {Request} from 'express'
import { Phone } from '../phone/entities/phone.entity';
export interface JwtRequest extends Request{
  user: Phone
}