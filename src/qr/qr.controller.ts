import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';
import { ApiTags } from '@nestjs/swagger';
import { CreateCheckoutResDto } from './checkout/checkout.dto';
import { CreateQrDto } from './qr.dto';

@Controller('qr')
@ApiTags("Qr")
export class QrController {

  @Post()
  @UseGuards(JwtAuthGuard)
  async addQr(@Body() createQrDto: CreateQrDto, @Req() req: JwtRequest) {
    console.log(createQrDto, req.user)
    return {} as CreateCheckoutResDto
  }
}
