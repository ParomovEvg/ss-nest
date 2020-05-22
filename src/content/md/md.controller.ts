import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  CreateMdDto,
  CreateMdFieldDto,
  CreateMdFieldResDto,
  CreateMdResDto,
  DeleteMdFieldResDto,
} from './md.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { MdService } from './md.service';

@Controller('md')
export class MdController {
  constructor(private mdService: MdService) {}

  @Get('field/:fieldId')
  async findMdField(@Param('fieldId') fieldId: number) {
    return eitherToDto(await this.mdService.findMdField(fieldId));
  }

  @Post('field')
  async createMdField(
    @Body() createMdField: CreateMdFieldDto,
  ): Promise<CreateMdFieldResDto> {
    return eitherToDto(await this.mdService.createMdField(createMdField));
  }

  @Delete('field/:fieldId')
  async deleteMdField(
    @Param('fieldId') fieldId: number,
  ): Promise<DeleteMdFieldResDto> {
    return eitherToDto(await this.mdService.deleteMdField(fieldId));
  }

  @Post('value')
  async createMd(@Body() createMdDto: CreateMdDto): Promise<CreateMdResDto> {
    return eitherToDto(await this.mdService.createMd(createMdDto));
  }
}
