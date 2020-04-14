import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Qr } from './qr.entity';
import { Repository } from 'typeorm';
import { Phone } from '../auth/phone/phone.entity';
import { Checkout } from './checkout/checkout.entity';
import { Draw } from './draw/draw.entity';
import { CreateQrDto } from './qr.dto';

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
