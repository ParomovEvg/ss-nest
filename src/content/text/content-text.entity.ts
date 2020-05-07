import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContentTextField } from './content-text-field.entity';

@Entity()
export class ContentText {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  value: string;

  @CreateDateColumn()
  createDate: Date;

  @ManyToOne(type => ContentTextField)
  field: ContentTextField;
}
