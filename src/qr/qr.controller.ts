import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateQrDto } from './dto/create-qr.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';

@Controller('qr')
export class QrController {

  @Post()
  @UseGuards(JwtAuthGuard)
  addQr(@Body() createQrDto: CreateQrDto, @Req() req: JwtRequest) {
    console.log(createQrDto, req.user)
  }
}
