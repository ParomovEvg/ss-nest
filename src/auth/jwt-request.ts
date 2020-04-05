import {Request} from 'express'
import { Phone } from './entities/phone.entity';
export interface JwtRequest extends Request{
  user: Phone
}