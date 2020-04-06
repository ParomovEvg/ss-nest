import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateQrDto } from './dto/create-qr.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';
import { CreateCheckoutResDto } from './checkout/dto/create-checkout.dto';
import { ApiTags } from '@nestjs/swagger';

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
