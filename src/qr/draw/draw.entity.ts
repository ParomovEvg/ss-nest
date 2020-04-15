import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Qr } from '../qr.entity';

@Entity()
export class Draw {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', default:null })
  start: Date;

  @Column({ type: 'datetime', default:null })
  end: Date;

  @Column({ type: 'text' })
  description: string;

  @Column('bigint')
  sLimit: number;

  @Column('bigint')
  qrLimit: number;

  @Column('bigint')
  qrLimitPeriodMS: number;

  @OneToMany(
    type => Qr,
    qr => qr.draw,
  )
  drawQrs: Qr[];
}
