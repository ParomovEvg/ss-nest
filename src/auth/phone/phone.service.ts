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
import { Either, left, right } from '@sweet-monads/either';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
    private passwordService: PasswordService,
    private connection: Connection,
  ) {}

  async createPhone(
    createPhoneDto: CreatePhoneDto,
  ): Promise<Either<PhoneAlreadyExists, Phone>> {
    return (await this.phoneNotExists(createPhoneDto)).asyncMap(async () => {
      const phone: Phone = this.phoneRepository.create();
      phone.phone = createPhoneDto.phone;
      const password = await this.passwordService.createPassword(
        createPhoneDto.password,
        phone,
      );
      await this.connection.transaction(async manager => {
        await manager.save(phone);
        await manager.save(password);
      });
      return Promise.resolve(phone);
    });
  }

  async addPassword(
    phoneObj: Phone,
    password: string,
  ): Promise<Either<PhoneNotFound, Password>> {
    const phone = await this.findPhone(phoneObj);
    return phone.asyncMap(phone => {
      return this.passwordService.createAndSavePassword(password, phone);
    });
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
      return phone.phone;
    }
  }
}
