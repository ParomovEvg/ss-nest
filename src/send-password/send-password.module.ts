import { Module } from '@nestjs/common';
import { SendPasswordMailService } from './send-password-mail/send-password-mail.service';

@Module({
  providers: [SendPasswordMailService],
  exports: [SendPasswordMailService],
})
export class SendPasswordModule {}
