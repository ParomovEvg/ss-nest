import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Password } from '../password/password.entity';
import { Qr } from '../../qr/qr.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 11, unique: true })
  phone: string;

  @CreateDateColumn()
  registrationDate: string;

  @Column({type:'boolean', default: false, })
  isAdmin:boolean;


  @OneToMany(
    type => Password,
    password => password.phone,
  )
  passwords: Password[];

  @OneToMany(
    type => Qr,
    qr => qr.phone,
  )
  phoneQrs: Qr[];
}
