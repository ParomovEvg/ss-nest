import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateQrDto } from './dto/CreateQrDto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtRequest } from '../auth/JwtRequest';

@Controller('qr')
export class QrController {

  @Post()
  @UseGuards(JwtAuthGuard)
  addQr(@Body() createQrDto: CreateQrDto, @Req() req: JwtRequest) {
    console.log(createQrDto, req.user)
  }
}
