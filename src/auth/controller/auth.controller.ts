import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreatePhoneDto } from '../dto/create-phone.dto';
import { PhoneAlreadyExists } from '../phone-service/errors/phone-already-exists';
import { JwtRequest } from '../jwt-request';
import { CreatePasswordDto } from '../dto/create-password.dto';
import { PhoneNotFound } from '../phone-service/errors/phone-not-found';
import { PhoneService } from '../phone-service/phone.service';
import { AuthService } from '../service/auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { Phone } from '../entities/phone.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private phoneService: PhoneService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('phone')
  async createUser(
    @Body() phoneDto: CreatePhoneDto,
  ): Promise<Phone | PhoneAlreadyExists> {
    console.log(phoneDto);
    return this.phoneService.createPhone(phoneDto).then(e => e.value);
  }

  @UseGuards(JwtAuthGuard)
  @Post('password')
  async addPassword(
    @Req() req: JwtRequest,
    @Body() createPasswordDto: CreatePasswordDto,
  ): Promise<PhoneNotFound | Phone> {
    const phone = await this.phoneService.addPassword(
      req.user,
      createPasswordDto.password,
    );
    return phone.map(password => password.phone).value;
  }
}
