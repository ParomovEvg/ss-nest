import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContentImgField } from './content-img-field.entity';

@Entity()
export class ContentImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'varchar' })
  path: string;

  @Column({ type: 'varchar' })
  host: string;

  @ManyToOne(type => ContentImgField)
  field: ContentImgField;
}
