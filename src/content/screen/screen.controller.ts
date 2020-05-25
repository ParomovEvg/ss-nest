import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ChangeScreenNameDto,
  ChangeScreenNameResDto,
  CreateScreenDto,
  CreateScreenResDto,
  DeleteScreenResDto,
  FindAllScreensResDto,
  FindScreenByIdResDto,
} from './screen.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { ScreenService } from './screen.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Content')
@Controller('screen')
export class ScreenController {
  constructor(private screenService: ScreenService) {}

  @Post()
  async createScreen(
    @Body() createScreenDto: CreateScreenDto,
  ): Promise<CreateScreenResDto> {
    return eitherToDto(await this.screenService.createScreen(createScreenDto));
  }

  @Get()
  async findAllScreens(): Promise<FindAllScreensResDto> {
    return { payload: await this.screenService.findAll() };
  }

  @Get(':screenId')
  async findScreenById(
    @Param('screenId') screenId: number,
  ): Promise<FindScreenByIdResDto> {
    return eitherToDto(await this.screenService.getScreenById(screenId));
  }

  @Delete(':screenId')
  async deleteScreenById(
    @Param('screenId') screenId: number,
  ): Promise<DeleteScreenResDto> {
    return eitherToDto(await this.screenService.deleteScreen(screenId));
  }

  @Put(':screenId')
  async changeScreenName(
    @Param('screenId') screenId: number,
    @Body() changeScreenNameDto: ChangeScreenNameDto,
  ): Promise<ChangeScreenNameResDto> {
    return eitherToDto(
      await this.screenService.changeScreenName(screenId, changeScreenNameDto),
    );
  }
}
