import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Qr } from './qr.entity';
import { Repository } from 'typeorm';
import { Phone } from '../auth/phone/phone.entity';
import { Checkout } from './checkout/checkout.entity';
import { Draw } from './draw/draw.entity';
import { CreateQrDto, FlatQrDto } from './qr.dto';
import { CheckoutService } from './checkout/checkout.service';
import { Either, left, right } from 'useful-monads';
import {
  createQrAlreadyExists,
  createQrRegistrationLimitExceeded,
  createQrSalaryNotEnough,
  QrAlreadyExists,
  QrRegistrationLimitExceeded,
  QrSalaryNotEnough,
} from './qr.errors.dto';
import { DrawService } from './draw/draw.service';
import { NotDrawNow } from './draw/draw.errors.dto';
import { CheckoutNotFoundByFn } from './checkout/checkout.errors.dto';
import { EitherAsync } from 'useful-monads/EitherAsync';
import { PhoneService } from '../auth/phone/phone.service';

@Injectable()
export class QrService {
  constructor(
    @InjectRepository(Qr)
    private qrRepository: Repository<Qr>,
    private checkoutService: CheckoutService,
    private drawService: DrawService,
    private phoneService: PhoneService,
  ) {}

  async findAllBy(where: { phone?: Phone; draw?: Draw; checkout?: Checkout }) {
    return await this.qrRepository.find({ where, relations: ['phone'] });
  }

  async createQr(
    createQrDto: CreateQrDto,
    phone: Phone,
  ): Promise<
    Either<
      | QrAlreadyExists
      | NotDrawNow
      | QrSalaryNotEnough
      | QrRegistrationLimitExceeded
      | CheckoutNotFoundByFn,
      FlatQrDto
    >
  > {
    return EitherAsync.from(this.checkQr(createQrDto.fp, createQrDto.fd))
      .asyncChain(() => this.drawService.findNowDraw())
      .asyncChain(draw => this.checkSalary(draw, createQrDto.s))
      .asyncChain(draw => this.checkQrRegistrationLimit(draw, phone))
      .asyncChain(async draw =>
        this.checkoutService
          .findCheckout(createQrDto.fn)
          .then(r => r.map(checkout => ({ draw, checkout }))),
      )
      .asyncMap(async ({ draw, checkout }) => {
        const qr = this.qrRepository.create(createQrDto);
        qr.phone = phone;
        qr.draw = draw;
        qr.checkout = checkout;
        const qrRes = await this.qrRepository.save(qr);

        const qrDto: FlatQrDto = {
          ...qrRes,
          time: qrRes.time.toISOString(),
        };
        return qrDto;
      })
      .run();
  }

  async checkQrRegistrationLimit(
    draw: Draw,
    phone: Phone,
  ): Promise<Either<QrRegistrationLimitExceeded, Draw>> {
    const qrs = await this.qrRepository.find({ phone: phone });
    let ageLimit = Date.now() - draw.qrLimitPeriodMS;
    if (draw.qrLimitPeriodMS == 0) {
      ageLimit = +draw.start;
    }
    let allowedNumber = draw.qrLimit;
    if (draw.qrLimit == 0) {
      allowedNumber = Infinity;
    }
    const qrsInTimeLimit = qrs.filter(qr => {
      const time = +qr.time;
      return time > ageLimit;
    });
    const canAddQr = qrsInTimeLimit.length < allowedNumber;

    if (canAddQr) {
      return right(draw);
    } else {
      let nextTime: string;
      if (draw.qrLimitPeriodMS == 0) {
        nextTime = new Date(draw.end).toISOString();
      } else {
        nextTime = new Date(
          +qrsInTimeLimit[0].time + +draw.qrLimitPeriodMS,
        ).toISOString();
      }
      return left(
        createQrRegistrationLimitExceeded({
          nextTime,
          qrLimit: draw.qrLimit,
          phone: phone.phone,
        }),
      );
    }
  }

  async checkSalary(
    draw: Draw,
    s: number,
  ): Promise<Either<QrSalaryNotEnough, Draw>> {
    if (draw.sLimit > s) {
      return left(createQrSalaryNotEnough({ s, sLimit: draw.sLimit }));
    } else {
      return right(draw);
    }
  }

  async checkQr(
    fp: string,
    fd: string,
  ): Promise<Either<QrAlreadyExists, true>> {
    const qr = await this.qrRepository.findOne({ where: { fd, fp } });
    if (qr) {
      return left(createQrAlreadyExists({ fd, fp }));
    } else {
      return right(true);
    }
  }

  async getQrNum(phone: string): Promise<string> {
    return EitherAsync.from(this.phoneService.findPhone(phone))
      .asyncMap(async phone => {
        const num = await this.qrRepository.count({ where: { phone } });
        return String(num);
      })
      .orDefault('0');
  }
}
