import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContentMdField } from '../md/content-md-field.entity';
import { ContentTextField } from '../text/content-text-field.entity';
import { ContentImgField } from '../img/content-img-field.entity';

@Entity()
export class ContentScreen {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @OneToMany(
    type => ContentTextField,
    textField => textField.screen,
  )
  textFields: ContentTextField[];

  @OneToMany(
    type => ContentMdField,
    textField => textField.screen,
  )
  mdFields: ContentMdField[];

  @OneToMany(
    type => ContentImgField,
    textField => textField.screen,
  )
  imgFields: ContentImgField[];
}
