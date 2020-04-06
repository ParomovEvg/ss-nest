import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  CreateCheckoutDto,
  CreateCheckoutResDto,
} from './dto/create-checkout.dto';
import { JwtAdminAuthGuard } from '../../auth/guards/jwt-admin-auth.guard';
import { CheckoutService } from './checkout.service';
import { eitherToDto } from '../../asets/eitherToDto';
import { FindCheckoutResDto } from './dto/find-checkout.dto';
import { FindAllCheckoutsResDto } from './dto/find-all-checkouts.dto';
import { FindQrsOfCheckoutResDto } from './dto/find-qrs-of-checkout.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { DeleteCheckoutResDto } from './dto/delete-checkout.dto';

@UseGuards(JwtAdminAuthGuard)
@ApiTags('Checkout')
@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Get(':fn')
  @ApiParam({name: "Fn", type: "String"})
  async findCheckout(@Param("fn") fn: string): Promise<FindCheckoutResDto> {
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
    return {
      payload: await this.checkoutService.createCheckoutAndSave(
        createCheckoutDto,
      ),
    };
  }

  @Delete(":checkoutId")
  @ApiParam({name:"checkoutId", type:"number"})
  async deleteCheckout(
    @Param("checkoutId") checkoutId: number,
  ): Promise<DeleteCheckoutResDto> {
    return eitherToDto(await this.checkoutService.deleteCheckout(checkoutId));
  }

  @Get(':checkoutId/qrs')
  async getQrsOfCheckout(
    @Param("checkoutId") checkoutId: number,
  ): Promise<FindQrsOfCheckoutResDto> {
    return {} as FindQrsOfCheckoutResDto;
  }
}
