import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { Password } from './password.entity';
import { Phone } from '../phone/phone.entity';
import {
  createPasswordsOfPhoneNotFound,
  PasswordsOfPhoneNotFound,
} from './password.errors.dto';
import { Either, left, right } from 'useful-monads';
import { generate } from 'generate-password';
import { LoginDto } from '../auth.dto';
import { SendPasswordMailService } from '../../send-password/send-password-mail/send-password-mail.service';

@Injectable()
export class PasswordService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(Password)
    private passwordRepository: Repository<Password>,
    private sendPasswordMailService: SendPasswordMailService,
  ) {}

  async createPassword(phone: Phone): Promise<Password> {
    const passwordString = generate({
      numbers: true,
      uppercase: false,
      length: 8,
    });
    await this.sendPasswordMailService.sendPassword(
      phone.phone,
      passwordString,
    );
    const password = this.passwordRepository.create();
    password.phone = phone;
    password.password = await hash(passwordString, this.saltRounds);
    return password;
  }

  async createAndSavePassword(phone: Phone) {
    const password = await this.createPassword(phone);
    await this.passwordRepository.save(password);
    return password;
  }

  async checkPhonePassword(
    phone: Phone,
    password: string | LoginDto | Password,
  ): Promise<Either<PasswordsOfPhoneNotFound, Phone | null>> {
    const passwordString = this.extractPassword(password);
    const passwords = await this.passwordRepository.find({
      where: { phone: phone },
    });
    if (passwords.length === 0) {
      return left(createPasswordsOfPhoneNotFound({ phone: phone.phone }));
    }
    const isValid = await Promise.all(
      passwords.map(password => {
        return this.checkPassword(passwordString, password);
      }),
    ).then(phones => phones.some(e => e));
    return right(isValid ? phone : null);
  }

  private async checkPassword(
    passwordString: string,
    password: Password,
  ): Promise<boolean> {
    return compare(passwordString, password.password);
  }

  private extractPassword(password: string | LoginDto | Password): string {
    let passwordString: string;
    if (typeof password === 'string') {
      passwordString = password;
    } else {
      passwordString = password?.password;
    }
    return passwordString;
  }
}
