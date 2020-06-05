import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { SendPasswordInterface } from '../send-password.interface';

@Injectable()
export class SendPasswordMailService implements SendPasswordInterface {
  private mail: Mail;
  constructor() {
    this.mail = createTransport({
      service: 'Gmail',
      auth: {
        user: 'serverservisinfo@gmail.com',
        pass: 'qazsedcft1',
      },
    });
  }

  sendPassword(phone: string, password: string): Promise<string> {
    return this.mail.sendMail({
      from: 'ss-nest',
      to: 'serverservisinfo@gmail.com',
      subject: 'password',
      text: `Телефон ${phone}, получил новый пароль ${password}`,
    });
  }
}
