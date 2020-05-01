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
  ChangeDrawDto,
  ChangeDrawResDto,
  CreateDrawDto,
  CreateDrawNextDto,
  CreateDrawResDto,
  DeleteDrawDto,
  DeleteDrawResDto,
  FindAllDrawResDto,
  FindFullDrawDto,
  FindFullDrawResDto,
  FindNowDrawResDto,
} from './draw.dto';
import { DrawService } from './draw.service';
import { eitherToDto } from '../../asets/eitherToDto';
import { JwtAdminAuthGuard } from '../../auth/guards/jwt-admin-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@UseGuards(JwtAdminAuthGuard)
@ApiBearerAuth('admin auth')
@ApiTags('Draw')
@Controller('draw')
export class DrawController {
  constructor(private drawService: DrawService) {}
  @Get()
  async findAll(): Promise<FindAllDrawResDto> {
    return {
      payload: (await this.drawService.findAllDraw()).map(
        this.drawService.mapDrawToFlatDraw,
      ),
      error: {},
    };
  }

  @Get(':id')
  async findDrawWithQrs(
    @Param() findFullDrawDto: FindFullDrawDto,
  ): Promise<FindFullDrawResDto> {
    return eitherToDto(
      (await this.drawService.findDraw(findFullDrawDto)).map(
        this.drawService.mapDrawToFullDraw,
      ),
    );
  }

  @Get('now')
  async findNow(): Promise<FindNowDrawResDto> {
    return eitherToDto(
      (await this.drawService.findNowDraw()).map(
        this.drawService.mapDrawToFlatDraw,
      ),
    );
  }

  @Post()
  async createDraw(
    @Body() createDrawDto: CreateDrawDto,
  ): Promise<CreateDrawResDto> {
    return eitherToDto(
      (await this.drawService.createDraw(createDrawDto)).map(
        this.drawService.mapDrawToFlatDraw,
      ),
    );
  }

  @Post('next')
  async createDrawNext(
    @Body() createDrawNextDto: CreateDrawNextDto,
  ): Promise<CreateDrawResDto> {
    return eitherToDto(
      (await this.drawService.createNextDraw(createDrawNextDto)).map(
        this.drawService.mapDrawToFlatDraw,
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
    @Body() changeDrawSalaryLimitDto: ChangeDrawDto,
    @Param('id') id: number,
  ): Promise<ChangeDrawResDto> {
    return eitherToDto(
      (await this.drawService.changeDraw(changeDrawSalaryLimitDto, id)).map(
        this.drawService.mapDrawToFlatDraw,
      ),
    );
  }
}
