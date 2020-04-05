import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { PasswordsOfPhoneNotFound } from './errors/passwords-of-phone-not-found';
import { CreatePhoneDto } from '../dto/create-phone.dto';
import Either from '@sweet-monads/either';
import { Password } from '../entities/password.entity';
import { Phone } from '../entities/phone.entity';

@Injectable()
export class PasswordService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(Password)
    private passwordRepository: Repository<Password>,
  ) {}

  async createPassword(
    passwordSrc: string | CreatePhoneDto,
    phone: Phone,
  ): Promise<Password> {
    const passwordString = this.extractPassword(passwordSrc);
    const password = this.passwordRepository.create();
    password.phone = phone;
    password.password = await hash(passwordString, this.saltRounds);
    return password;
  }

  async createAndSavePassword(passwordString: string, phone: Phone) {
    const password = await this.createPassword(passwordString, phone);
    await this.passwordRepository.save(password);
    return password;
  }

  async checkPhonePassword(
    phone: Phone,
    password: string | CreatePhoneDto | Password,
  ): Promise<Either<PasswordsOfPhoneNotFound, Phone | null>> {
    const passwordString = this.extractPassword(password);
    const passwords = await this.passwordRepository.find({
      where: { phone: phone},
    });
    console.log({passwords});
    if (passwords.length === 0) {
      return Either.left(new PasswordsOfPhoneNotFound(phone.phone));
    }
    const isValid = await Promise.all(
      passwords.map(password => {
        return this.checkPassword(passwordString, password);
      }),
    ).then(phones => phones.some(e => e));
    return Either.right(isValid ? phone : null);
  }

  private async checkPassword(
    passwordString: string,
    password: Password,
  ): Promise<boolean> {
    return compare(passwordString, password.password);
  }

  private extractPassword(
    password: string | CreatePhoneDto | Password,
  ): string {
    let passwordString: string;
    if (typeof password === 'string') {
      passwordString = password;
    } else {
      passwordString = password.password;
    }
    return passwordString;
  }
}
