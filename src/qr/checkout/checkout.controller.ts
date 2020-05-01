import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAdminAuthGuard } from '../../auth/guards/jwt-admin-auth.guard';
import { CheckoutService } from './checkout.service';
import { eitherToDto } from '../../asets/eitherToDto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  CreateCheckoutDto,
  CreateCheckoutResDto,
  DeleteCheckoutResDto,
  FindAllCheckoutsResDto,
  FindCheckoutResDto,
  FindQrsOfCheckoutResDto,
} from './checkout.dto';

@UseGuards(JwtAdminAuthGuard)
@ApiBearerAuth('admin auth')
@ApiTags('Checkout')
@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Get(':fn')
  async findCheckout(@Param('fn') fn: string): Promise<FindCheckoutResDto> {
    return eitherToDto(await this.checkoutService.findCheckout(fn));
  }

  @Get()
  async findAllCheckout(): Promise<FindAllCheckoutsResDto> {
    return eitherToDto(await this.checkoutService.getAll());
  }

  @Post()
  async createCheckout(
    @Body() createCheckoutDto: CreateCheckoutDto,
  ): Promise<CreateCheckoutResDto> {
    return eitherToDto(
      await this.checkoutService.createCheckoutAndSave(createCheckoutDto),
    );
  }

  @Delete(':checkoutId')
  @ApiParam({ name: 'checkoutId', type: 'number' })
  async deleteCheckout(
    @Param('checkoutId') checkoutId: number,
  ): Promise<DeleteCheckoutResDto> {
    return eitherToDto(await this.checkoutService.deleteCheckout(checkoutId));
  }

  @Get(':checkoutId/qrs')
  async getQrsOfCheckout(
    @Param('checkoutId') checkoutId: number,
  ): Promise<FindQrsOfCheckoutResDto> {
    return {} as FindQrsOfCheckoutResDto;
  }
}
