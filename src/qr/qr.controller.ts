import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';
import { ApiTags } from '@nestjs/swagger';
import { CreateQrDto, CreateQrResDto } from './qr.dto';
import { eitherToDto } from '../asets/eitherToDto';
import { QrService } from './qr.service';

@Controller('qr')
@ApiTags('Qr')
@UseGuards(JwtAuthGuard)
export class QrController {
  constructor(private qrService: QrService) {}

  @Post()
  async addQr(
    @Body() createQrDto: CreateQrDto,
    @Req() req: JwtRequest,
  ): Promise<CreateQrResDto> {
    return eitherToDto(await this.qrService.createQr(createQrDto, req.user));
  }
}
