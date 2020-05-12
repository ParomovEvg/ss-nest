import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContentImg } from './content-img.entity';
import { ContentScreen } from '../screen/content-screen.entity';

@Entity()
export class ContentImgField {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @OneToMany(
    type => ContentImg,
    img => img.field,
  )
  img: ContentImg;

  @ManyToOne(type => ContentScreen)
  screen: ContentScreen;
}
