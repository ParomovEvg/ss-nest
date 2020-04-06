import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Checkout } from '../entities/checkout.entity';
import { Repository } from 'typeorm';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { CheckoutNotFoundById, CheckoutNotFoundByFn } from './errors/checkout-not-found';
import Either from '@sweet-monads/either';
import { CreateQrDto } from '../dto/create-qr.dto';

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
      return Either.right(checkout);
    } else {
      return Either.left(new CheckoutNotFoundByFn(fn));
    }
  }

  async getAll(
  ): Promise<Either<null, Checkout[]>>{
    return Either.right(
      await this.checkoutRepository.find()
    )
  }

  createCheckout(createCheckoutDto: CreateCheckoutDto): Checkout {
    const checkout = this.checkoutRepository.create();
    checkout.fn = createCheckoutDto.fn;
    checkout.address = createCheckoutDto.address;
    return checkout;
  }

  async createCheckoutAndSave(
    createCheckoutDto: CreateCheckoutDto,
  ): Promise<Checkout> {
    const checkout = this.createCheckout(createCheckoutDto);
    return await this.checkoutRepository.save(checkout);
  }

  async deleteCheckout(id: number): Promise<Either<CheckoutNotFoundById, number>> {
    const checkout = await this.checkoutRepository.findOne({where:{id}});
    if (checkout) {
      await this.checkoutRepository.delete(checkout);
      return Either.right(id);
    } else {
      return Either.left(new CheckoutNotFoundById(id));
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
