import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Password } from '../entities/password.entity';
import { Repository } from 'typeorm';
import { Phone } from '../entities/phone.entity';
import { compare, hash } from 'bcrypt';
import { EitherAsync } from 'purify-ts';
import { PasswordsOfPhoneNotFound } from './errors/passwords-of-phone-not-found';
import { CreatePhoneDto } from '../dto/CreatePhoneDto';

@Injectable()
export class PasswordService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(Password)
    private passwordRepository: Repository<Password>,
  ) {}

  async generatePassword(passwordString: string, phone: Phone) {
    const password = this.passwordRepository.create();
    password.phone = phone;
    password.password = await this.getHash(passwordString);
    await this.passwordRepository.save(password);
    return password;
  }

  checkPhonePassword(
    phone: Phone,
    password: string | CreatePhoneDto,
  ): EitherAsync<PasswordsOfPhoneNotFound, boolean> {
    let passwordString: string;
    if (typeof password === 'string') {
      passwordString = password;
    } else {
      passwordString = password.password;
    }
    return EitherAsync(({ throwE }) => {
      return this.passwordRepository
        .find({ where: { phone: phone } })
        .then(passwords => {
          if (passwords.length === 0) {
            throwE(new PasswordsOfPhoneNotFound(phone.phone));
          }
          return Promise.all(
            passwords.map(password => {
              return this.checkPassword(passwordString, password.password);
            }),
          ).then(phones => phones.some(e => e));
        });
    });
  }

  private async checkPassword(
    passwordString: string,
    hashString: string,
  ): Promise<boolean> {
    return compare(passwordString, hashString);
  }

  private async getHash(passwordString: string): Promise<string> {
    return hash(passwordString, this.saltRounds);
  }
}
