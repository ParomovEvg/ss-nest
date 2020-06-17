import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import {
  CreateImgFieldDto,
  CreateImgFieldResDto,
  CreateImgResDto,
  DeleteImgFieldResDto,
  FindImgFieldByIdResDto,
  GetImgBeforeResDto,
  SaveImgLastDto,
  SaveImgLastResDto,
  ChangeImgField,
  UpdateImgFieldResDto,
} from './img.dto';
import { eitherToDto } from '../../asets/eitherToDto';
import { ImgService } from './img.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import { last } from 'lodash';

@Controller('img')
export class ImgController {
  constructor(private imgService: ImgService) {}
  @Post('field')
  async createImgField(
    @Body() { name, screenId, description }: CreateImgFieldDto,
  ): Promise<CreateImgFieldResDto> {
    return eitherToDto(
      await this.imgService.createImgField(screenId, name, description),
    );
  }

  @Delete('field/:fieldId')
  async deleteImgField(
    @Param('fieldId') fieldId: number,
  ): Promise<DeleteImgFieldResDto> {
    return eitherToDto(await this.imgService.deleteImgField(fieldId));
  }

  @Get('field/:fieldId')
  async findFieldById(
    @Param('fieldId') fieldId: number,
  ): Promise<FindImgFieldByIdResDto> {
    return eitherToDto(await this.imgService.findFiledById(fieldId));
  }

  @Put('field/:fieldId')
  async updateTextField(
    @Body() changeField: ChangeImgField,
    @Param('fieldId') fieldId: string,
  ): Promise<UpdateImgFieldResDto> {
    return eitherToDto(
      await this.imgService.updateImgField(changeField, fieldId),
    );
  }

  @Post('field/:fieldId/value')
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'file', required: true })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file1, callback) => {
          const ext = last(file1.originalname.split('.'));

          callback(null, v4() + '.' + ext);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile()
    file: {
      path: string;
    },
    @Param('fieldId') fieldId: number,
  ): Promise<CreateImgResDto> {
    return eitherToDto(await this.imgService.createImg(fieldId, file.path));
  }

  @Get('field/:fieldId/value/:imgId/before')
  async getImgBefore(
    @Param('fieldId') filedId: number,
    @Param('imgId') imgId: number,
  ): Promise<GetImgBeforeResDto> {
    return eitherToDto(await this.imgService.getImageBefore(filedId, imgId));
  }

  @Post('value/before')
  async saveImgBefore(
    @Body() saveImgLastDto: SaveImgLastDto,
  ): Promise<SaveImgLastResDto> {
    return eitherToDto(await this.imgService.saveImgLast(saveImgLastDto.imgId));
  }
}
