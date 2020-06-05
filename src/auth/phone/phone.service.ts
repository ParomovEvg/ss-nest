import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { PasswordService } from '../password/password.service';
import { Phone } from './phone.entity';
import { Password } from '../password/password.entity';
import {
  createPhoneAlreadyExists,
  createPhoneNotFound,
  PhoneAlreadyExists,
  PhoneNotFound,
} from './phone.errors.dto';
import { CreatePhoneDto } from './phone.dto';
import { Either, left, right } from 'useful-monads';
import { EitherAsync } from 'useful-monads/EitherAsync';
import { SendPasswordMailService } from '../../send-password/send-password-mail/send-password-mail.service';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
    private passwordService: PasswordService,
    private connection: Connection,
    private sendPasswordMailService: SendPasswordMailService,
  ) {}

  async createPhone(createPhoneDto: CreatePhoneDto): Promise<Phone> {
    const phone = await EitherAsync.from(
      this.findPhone(createPhoneDto.phone),
    ).orDefault(this.phoneRepository.create());
    phone.phone = createPhoneDto.phone;
    const password = await this.passwordService.createPassword(phone);
    await this.connection.transaction(async manager => {
      await manager.save(phone);
      await manager.save(password);
    });
    return Promise.resolve(phone);
  }

  async addPassword(phoneObj: Phone): Promise<Either<PhoneNotFound, Password>> {
    const phone = await this.findPhone(phoneObj);
    return phone
      .asyncMap(async phone => {
        const password = await this.passwordService.createAndSavePassword(
          phone,
        );
        await this.sendPasswordMailService.sendPassword(
          phone.phone,
          password.password,
        );
        return password;
      })
      .run();
  }

  async findPhone(
    phone: string | Phone | CreatePhoneDto,
  ): Promise<Either<PhoneNotFound, Phone>> {
    const phoneNumber: string = this.extractPhoneNumber(phone);
    const phoneInstance = await this.phoneRepository.findOne({
      where: { phone: phoneNumber },
    });
    if (phoneInstance) {
      return right(phoneInstance);
    }
    return left(createPhoneNotFound({ phone: phoneNumber }));
  }

  private async phoneNotExists(
    phoneSrc: string | Phone | CreatePhoneDto,
  ): Promise<Either<PhoneAlreadyExists, true>> {
    const phoneNumber = this.extractPhoneNumber(phoneSrc);
    const phone = await this.phoneRepository.findOne({
      where: { phone: phoneNumber },
    });
    if (phone) {
      return left(createPhoneAlreadyExists({ phone: phoneNumber }));
    } else {
      return right(true);
    }
  }

  private extractPhoneNumber(phone: string | CreatePhoneDto | Phone) {
    if (typeof phone === 'string') {
      return phone;
    } else {
      return phone?.phone;
    }
  }
}
