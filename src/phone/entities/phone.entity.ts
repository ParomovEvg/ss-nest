import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Password } from './password.entity';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 11, unique:true })
  phone: string;

  @CreateDateColumn()
  registrationDate: string;

  @OneToMany(type => Password, password => password.phone)
  passwords: Password[]
}
