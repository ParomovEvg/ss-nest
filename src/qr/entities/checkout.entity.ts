import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Qr } from './qr.entity';

@Entity()
export class Checkout {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({type:"varchar", length: "16"})
  fn:string;

  @Column('text')
  adress:string;

  @OneToMany(type => Qr, qr => qr.checkout)
  checkoutQrs: Qr[];

}