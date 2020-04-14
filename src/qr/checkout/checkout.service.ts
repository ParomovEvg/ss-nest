import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Checkout } from './checkout.entity';
import { Repository } from 'typeorm';
import { CreateCheckoutDto, DeleteCheckoutResDto } from './checkout.dto';
import {
  CheckoutNotFoundByFn,
  CheckoutNotFoundById,
  createCheckoutAlreadyExist,
  createCheckoutNotFoundByFn,
  createCheckoutNotFoundById,
} from './checkout.errors.dto';
import { CreateQrDto } from '../qr.dto';
import { Either, left, right } from '@sweet-monads/either';
import { create } from 'domain';

type FnAble = string | Checkout | CreateCheckoutDto | CreateQrDto;

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout)
    private checkoutRepository: Repository<Checkout>,
  ) {}

  async findCheckout(
    checkoutSrc: FnAble,
  ): Promise<Either<CheckoutNotFoundByFn, Checkout>> {
    const fn = this.extractFn(checkoutSrc);
    const checkout = await this.checkoutRepository.findOne({ where: { fn } });
    if (checkout) {
      return right(checkout);
    } else {
      return left(createCheckoutNotFoundByFn({ fn }));
    }
  }

  async getAll(): Promise<Either<null, Checkout[]>> {
    return right(await this.checkoutRepository.find());
  }

  createCheckout(createCheckoutDto: CreateCheckoutDto): Checkout {
    const checkout = this.checkoutRepository.create();
    checkout.fn = createCheckoutDto.fn;
    checkout.address = createCheckoutDto.address;
    return checkout;
  }

  async createCheckoutAndSave(
    createCheckoutDto: CreateCheckoutDto,
  ): Promise<Either<any, Checkout>> {
    let error;
    (await this.findCheckout(createCheckoutDto)).mapLeft(e => {
      error = e;
    });
    if (error) {
      const checkout = this.createCheckout(createCheckoutDto);
      return right(await this.checkoutRepository.save(checkout));
    } else {
      return left(createCheckoutAlreadyExist({ fn: createCheckoutDto.fn }));
    }
  }

  async deleteCheckout(
    id: number,
  ): Promise<Either<CheckoutNotFoundById, DeleteCheckoutResDto['payload']>> {
    const checkout = await this.checkoutRepository.findOne({ where: { id } });
    if (checkout) {
      await this.checkoutRepository.delete(checkout);
      return right({ checkoutId: id });
    } else {
      return left(createCheckoutNotFoundById({ id }));
    }
  }

  private extractFn(checkout: FnAble): string {
    if (typeof checkout === 'string') {
      return checkout;
    } else {
      return checkout.fn;
    }
  }
}
