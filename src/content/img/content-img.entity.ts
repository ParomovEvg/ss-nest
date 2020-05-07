import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContentImgField } from './content-img-field.entity';

@Entity()
export class ContentImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  url: string;

  @CreateDateColumn()
  createDate: Date;

  @OneToOne(type => ContentImgField)
  field: ContentImgField;
}
