import { PhoneError } from './phone-error';

export class PhoneNotFound extends PhoneError {
  phone:string;
  constructor(phone:string) {
    super(`phone ${phone} not found`);
    this.phone = phone;
    this.name = "PhoneNotFound";
  }

}