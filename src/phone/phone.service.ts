import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';
import { Repository } from 'typeorm';
import { Password } from './entities/password.entity';
import { CreatePhoneDto } from './dto/CreatePhoneDto';
import { EitherAsync } from 'purify-ts';
import { PhoneNotFound } from './errors/phone-not-found';
import { PhoneAlreadyExists } from './errors/phone-already-exists';
import { PasswordService } from './password/password.service';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
    private passwordService: PasswordService,
  ) {}

  createPhone(
    createPhoneDto: CreatePhoneDto,
  ): EitherAsync<PhoneAlreadyExists, Phone> {
    return this.phoneNotExists(createPhoneDto.phone).chain(() =>
      EitherAsync(async () => {
        const phone: Phone = this.phoneRepository.create();
        phone.phone = createPhoneDto.phone;
        await this.phoneRepository.save(phone);
        await this.passwordService.generatePassword(
          createPhoneDto.password,
          phone,
        );
        return Promise.resolve(phone);
      }),
    );
  }

  addPassword(
    createPhoneDto: CreatePhoneDto,
  ): EitherAsync<PhoneNotFound, Password> {
    return this.findPhone(createPhoneDto.phone).chain(phone =>
      EitherAsync(() =>
        this.passwordService.generatePassword(createPhoneDto.password, phone),
      ),
    );
  }

  findPhone(phone: string | Phone | CreatePhoneDto): EitherAsync<PhoneNotFound, Phone> {
    let phoneNumber: string;
    if (typeof phone === 'string') {
      phoneNumber = phone;
    } else {
      phoneNumber = phone.phone
    }
    return EitherAsync(({ throwE }) =>
      this.phoneRepository
        .findOne({ where: { phone:phoneNumber } })
        .then(phoneInstance => {
          if (phoneInstance) {
            return phoneInstance;
          }
          throwE(new PhoneNotFound(phoneNumber));
        }),
    );
  }

  private phoneNotExists(
    phoneNumber: string,
  ): EitherAsync<PhoneAlreadyExists, true> {
    return EitherAsync(({ throwE }) =>
      this.phoneRepository
        .findOne({ where: { phone: phoneNumber } })
        .then(res => {
          if (res) {
            throwE(new PhoneAlreadyExists(phoneNumber));
          }
          return true as const;
        }),
    );
  }
}
