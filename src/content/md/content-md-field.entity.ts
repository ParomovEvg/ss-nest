import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContentMd } from './content-md.entity';
import { ContentScreen } from '../screen/content-screen.entity';

@Entity()
export class ContentMdField {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'text' })
  label: string;
  @OneToMany(
    type => ContentMd,
    md => md.value,
  )
  values: ContentMd[];

  @ManyToOne(type => ContentScreen)
  screen: ContentScreen
}
