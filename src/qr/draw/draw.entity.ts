import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Qr } from '../qr.entity';

@Entity()
export class Draw {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  start: string;

  @Column({ type: 'timestamp' })
  end: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(
    type => Qr,
    qr => qr.draw,
  )
  drawQrs: Qr[];
}
