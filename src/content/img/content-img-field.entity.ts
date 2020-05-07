import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
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

  @OneToOne(type => ContentImg)
  img: ContentImg;

  @ManyToOne(type => ContentScreen)
  screen: ContentScreen;
}
