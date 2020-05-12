import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { GetContentResDto } from './content.dto';
import { ContentService } from './content.service';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}
  @Get()
  @ApiBadRequestResponse()
  async getContent(): Promise<GetContentResDto> {
    return {
      payload: await this.contentService.getContent(),
    };
  }
}
