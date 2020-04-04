import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreatePhoneDto } from './dto/CreatePhoneDto';
import { PhoneAlreadyExists } from './errors/phone-already-exists';
import { Phone } from './entities/phone.entity';
import { PhoneService } from './phone.service';
import { PhoneNotFound } from './errors/phone-not-found';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePasswordDto } from './dto/CreatePasswordDto';
import { JwtRequest } from '../auth/JwtRequest';

@Controller('phone')
export class PhoneController {
  constructor(
    private phoneService: PhoneService,
  ) {}

  @Post()
  async createUser(
    @Body() phoneDto: CreatePhoneDto,
  ): Promise<Phone | PhoneAlreadyExists> {
    console.log(phoneDto);
    return this.phoneService.createPhone(phoneDto).then(e => e.value);
  }

  @UseGuards(JwtAuthGuard)
  @Post('password')
  async addPassword(@Req() req: JwtRequest, @Body() createPasswordDto: CreatePasswordDto) : Promise<PhoneNotFound | Phone> {
    const phone = await this.phoneService.addPassword(req.user, createPasswordDto.password);
    return phone.map(password => password.phone).value
  }
}
