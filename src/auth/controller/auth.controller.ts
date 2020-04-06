import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
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
import { CreatePhoneResDto } from '../dto/create-phone.res.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { CreatePasswordResDto } from '../dto/create-password.res.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
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
  getProfile(@Request() req): Phone {
    return req.user;
  }

  @Post('phone')
  async createUser(
    @Body() phoneDto: CreatePhoneDto,
  ): Promise<CreatePhoneResDto> {
    return eitherToDto(
      await this.phoneService.createPhone(phoneDto)
    )
  }

  @UseGuards(JwtAuthGuard)
  @Post('password')
  async addPassword(
    @Req() req: JwtRequest,
    @Body() createPasswordDto: CreatePasswordDto,
  ): Promise<CreatePasswordResDto> {
    const phone = await this.phoneService.addPassword(
      req.user,
      createPasswordDto.password,
    );
    return eitherToDto(
      phone.map(password => password.phone)
    )
  }
}
