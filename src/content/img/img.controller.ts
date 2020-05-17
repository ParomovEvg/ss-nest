import { Body, Controller, Post } from '@nestjs/common';
import { CreateImgFieldDto, CreateImgFieldResDto } from './img.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { ImgService } from './img.service';

@Controller('img')
export class ImgController {
  constructor(private imgService: ImgService) {}
  @Post('field')
  async createImgField(
    @Body() { name, screenId }: CreateImgFieldDto,
  ): Promise<CreateImgFieldResDto> {
    return eitherToDto(await this.imgService.createImgField(screenId, name));
  }

  @Post('value')
  async creatImg(@Body() {name}:{name:string}){
    return 'helfjal;df'

  }
}
