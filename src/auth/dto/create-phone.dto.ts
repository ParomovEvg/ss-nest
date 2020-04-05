import { IsMobilePhone, IsNotEmpty } from 'class-validator';

export class CreatePhoneDto {
  @IsMobilePhone('ru-RU')
  phone: string;
  @IsNotEmpty()
  password: string;
}
