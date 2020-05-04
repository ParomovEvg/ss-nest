import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  @Get('home')
  getHome(): string{
    return 'HEllo world'
  }
}
