import { PhoneErrors } from './PhoneErrors';

export class PhoneAlreadyExists extends Error {
  phone:string;
  constructor(phone:string) {
    super();
    this.message = `phone ${phone} not found`;
    this.phone = phone;
    this.name = PhoneErrors.PhoneAlreadyExists;
  }
}