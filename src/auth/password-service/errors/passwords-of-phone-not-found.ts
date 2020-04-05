import { PasswordError } from './password-error';

export class PasswordsOfPhoneNotFound extends PasswordError {
  phone:string;
  constructor(phone:string) {
    super(`phone ${phone} dont have passwords`);
    this.phone = phone;
    this.name = "PasswordsOfPhoneNotFound";
  }

}