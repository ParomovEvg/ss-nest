import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';
import { ApiTags } from '@nestjs/swagger';
import { CreateQrDto, CreateQrResDto } from './qr.dto';

@Controller('qr')
@ApiTags('Qr')
@UseGuards(JwtAuthGuard)
export class QrController {
  @Post()
  async addQr(@Body() createQrDto: CreateQrDto, @Req() req: JwtRequest): Promise<CreateQrResDto> {
    console.log(createQrDto, req.user);
    return {} as CreateQrResDto;
  }
}
