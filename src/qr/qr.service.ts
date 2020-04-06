import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Qr } from './entities/qr.entity';
import { Repository } from 'typeorm';
import { Phone } from '../auth/entities/phone.entity';
import { Checkout } from './entities/checkout.entity';
import { Draw } from './entities/draw.entity';

@Injectable()
export class QrService {
  constructor(
    @InjectRepository(Qr)
    private qrRepository: Repository<Qr>,
  ) {}

  async findAllBy(where: { phone?: Phone; draw?: Draw; checkout?: Checkout }) {
    return await this.qrRepository.find({ where, relations:["phone"] });
  }
}
