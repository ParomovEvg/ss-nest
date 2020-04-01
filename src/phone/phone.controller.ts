import { Body, Controller, Post } from '@nestjs/common';
import { CreatePhoneDto } from './dto/CreatePhoneDto';
import { PhoneAlreadyExists } from './errors/phone-already-exists';
import { Phone } from './entities/phone.entity';
import { PhoneService } from './phone.service';
import { PasswordService } from './password/password.service';

@Controller('phone')
export class PhoneController {
  constructor(
    private phoneService: PhoneService,
    private passwordService: PasswordService,
  ) {}

  @Post()
  async createUser(
    @Body() phoneDto: CreatePhoneDto,
  ): Promise<Phone | PhoneAlreadyExists> {
    const phoneWrapper = await this.phoneService.createPhone(phoneDto).run();
    return phoneWrapper.extract();
  }

  @Post('check')
  async checkPassword(@Body() phoneDto: CreatePhoneDto) {
    return this.phoneService
      .findPhone(phoneDto)
      .chain(phone => {
        return this.passwordService.checkPhonePassword(phone, phoneDto);
      })
      .run();
  }
}
