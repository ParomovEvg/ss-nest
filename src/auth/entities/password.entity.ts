import {
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Phone } from './phone.entity';

@Entity()
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  password: string;

  @ManyToOne(type => Phone )
  phone: Phone;

  @CreateDateColumn()
  passwordDate: string;
}
