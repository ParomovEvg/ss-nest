import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  CreateTextDto,
  CreateTextFieldDto,
  CreateTextFieldResDto,
  CreateTextResDto,
  DeleteTextFieldResDto,
  FindTextOfFieldResDto,
} from './text.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { TextService } from './text.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Content')
@Controller('text')
export class TextController {
  constructor(private textService: TextService) {}
  @Post('field')
  async createField(
    @Body() createTextFieldDto: CreateTextFieldDto,
  ): Promise<CreateTextFieldResDto> {
    return eitherToDto(await this.textService.createField(createTextFieldDto));
  }

  @Post('value')
  async createText(
    @Body() createTextDto: CreateTextDto,
  ): Promise<CreateTextResDto> {
    return eitherToDto(await this.textService.createText(createTextDto));
  }

  @Get('field/:fieldId')
  async findTextOfFiled(
    @Param('fieldId') fieldId: number,
  ): Promise<FindTextOfFieldResDto> {
    return eitherToDto(await this.textService.findTextFieldById(fieldId));
  }

  @Delete('field/:fieldId')
  async deleteTextField(
    @Param('fieldId') fieldId: number,
  ): Promise<DeleteTextFieldResDto> {
    return eitherToDto(await this.textService.deleteTextField(fieldId));
  }
}
