import { Body, Controller, Post } from '@nestjs/common';
import { CreateScreenDto, CreateScreenResDto } from './screen.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { ScreenService } from './screen.service';

@Controller('screen')
export class ScreenController {
  constructor(private screenService: ScreenService) {}

  @Post()
  async createScreen(
    @Body() createScreenDto: CreateScreenDto,
  ): Promise<CreateScreenResDto> {
    return eitherToDto(await this.screenService.createScreen(createScreenDto));
  }
}
