import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContentMdField } from './content-md-field.entity';

@Entity()
export class ContentMd {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  value: string;
  @ManyToOne(type => ContentMdField)
  field: ContentMdField;
}
