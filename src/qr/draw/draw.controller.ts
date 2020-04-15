import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ChangeDrawSalaryLimitDto,
  ChangeDrawSalaryLimitResDto,
  CreateDrawDto,
  CreateDrawNextDto,
  CreateDrawResDto,
  DeleteDrawDto,
  DeleteDrawResDto,
  FindAllDrawResDto,
  FindNowDrawResDto,
} from './draw.dto';
import { DrawService } from './draw.service';
import { eitherToDto } from '../../asets/eitherToDto';
import { JwtAdminAuthGuard } from '../../auth/guards/jwt-admin-auth.guard';
import { ApiTags } from '@nestjs/swagger';
@UseGuards(JwtAdminAuthGuard)
@ApiTags('Draw')
@Controller('draw')
export class DrawController {
  constructor(private drawService: DrawService) {}
  @Get()
  async findAll(): Promise<FindAllDrawResDto> {
    return {
      payload: await this.drawService.findAllDraw(),
      error: {},
    };
  }

  @Get('now')
  async findNow(): Promise<FindNowDrawResDto> {
    return eitherToDto(await this.drawService.findNowDraw());
  }

  @Post()
  async createDraw(
    @Body() createDrawDto: CreateDrawDto,
  ): Promise<CreateDrawResDto> {
    return eitherToDto(
      await this.drawService.createDraw(
        createDrawDto.start,
        createDrawDto.end,
        createDrawDto.description,
      ),
    );
  }

  @Post('next')
  async createDrawNext(
    @Body() createDrawNextDto: CreateDrawNextDto,
  ): Promise<CreateDrawResDto> {
    return eitherToDto(
      await this.drawService.createNextDraw(
        createDrawNextDto.end,
        createDrawNextDto.description,
      ),
    );
  }

  @Delete(':id')
  async deleteDraw(
    @Param() deleteDrawDto: DeleteDrawDto,
  ): Promise<DeleteDrawResDto> {
    return eitherToDto(await this.drawService.deleteDraw(deleteDrawDto.id));
  }

  @Put(':id')
  async changeDrawSalary(
    @Body() changeDrawSalaryLimitDto: ChangeDrawSalaryLimitDto,
    @Param('id') id: number,
  ): Promise<ChangeDrawSalaryLimitResDto> {
    return eitherToDto(
      await this.drawService.changeSalary(changeDrawSalaryLimitDto.sLimit, id),
    );
  }
}
