import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Checkout } from './checkout/checkout.entity';
import { Draw } from './draw/draw.entity';
import { Phone } from '../auth/phone/phone.entity';

@Entity()
export class Qr {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(
    type => Phone,
    phone => phone.phoneQrs,{eager:true}
  )
  phone: Phone;

  @ManyToOne(
    type => Checkout,
    checkout => checkout.checkoutQrs, {eager:true}
  )
  checkout: Checkout;

  @ManyToOne(
    type => Draw,
    draw => draw.drawQrs,
  )
  draw: Draw;

  @Column({ type: 'varchar', length: 10 })
  fp: string;

  @Column({ type: 'varchar', length: 10 })
  fd: string;

  @Column('bigint')
  s: number;

  @CreateDateColumn()
  time: Date;
}
