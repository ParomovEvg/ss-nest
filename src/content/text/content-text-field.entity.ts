import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContentText } from './content-text.entity';
import { ContentScreen } from '../screen/content-screen.entity';

@Entity()
export class ContentTextField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(
    type => ContentText,
    text => text.field,
  )
  values: ContentText[];

  @ManyToOne(type => ContentScreen)
  screen: ContentScreen
}
