import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRequest } from './jwt-request';
import { PhoneService } from './phone/phone.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { eitherToDto } from '../asets/eitherToDto';
import { ApiTags } from '@nestjs/swagger';
import { CreatePhoneDto, CreatePhoneResDto, FlatPhoneDto } from './phone/phone.dto';
import {
  CreatePasswordDto,
  CreatePasswordResDto,
} from './password/password.dto';
import { LoginDto, LoginResDto } from './auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private phoneService: PhoneService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(
    @Request() req,
    @Body() loginDto: LoginDto,
  ): Promise<LoginResDto> {
    return {
      payload: await this.authService.login(req.user),
      error: {},
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): FlatPhoneDto {
    return req.user;
  }

  @Post('phone')
  async createUser(
    @Body() phoneDto: CreatePhoneDto,
  ): Promise<CreatePhoneResDto> {
    return eitherToDto(await this.phoneService.createPhone(phoneDto));
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
    return eitherToDto(phone.map(password => password.phone));
  }
}
