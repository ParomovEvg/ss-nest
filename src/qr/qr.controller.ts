import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/jwt-request';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateQrDto,
  CreateQrResDto,
  GetQrNumResDto,
  FilterQrResDto,
  FilterQrDto,
  GetAllQrResDto,
} from './qr.dto';
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

  @Get()
  async getAllQr(): Promise<GetAllQrResDto> {
    return {
      payload: await this.qrService
        .getAllQr()
        .then(r => r.map(q => this.qrService.mapQrToFtatQrDto(q))),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('count')
  async countQr(@Req() req: JwtRequest): Promise<GetQrNumResDto> {
    return {
      payload: await this.qrService.getQrNum(req.user.phone),
    };
  }
  @UseGuards(JwtAuthGuard)
  @Post('filter')
  async filterQr(@Body() filterQr: FilterQrDto): Promise<FilterQrResDto> {
    const { qrs, count } = await this.qrService.getQrFilter(filterQr);
    return {
      payload: {
        qrs: qrs.map(q => this.qrService.mapQrToFtatQrDto(q)),
        count,
      },
    };
  }
}
