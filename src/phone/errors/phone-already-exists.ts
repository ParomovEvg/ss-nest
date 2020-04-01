import { PhoneError } from './phone-error';

export class PhoneAlreadyExists extends PhoneError {
  phone: string;
  constructor(phone:string) {
    super(`phone ${phone} is already exists`);
    this.phone = phone;
    this.name = "PhoneAlreadyExists";
  }
}