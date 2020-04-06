import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { QrController } from './qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrStringParserMiddleware } from './qr-string-parser.middleware';
import { AuthModule } from '../auth/auth.module';
import { Qr } from './entities/qr.entity';
import { Draw } from './entities/draw.entity';
import { Checkout } from './entities/checkout.entity';
import { DrawController } from './draw/draw.controller';
import { CheckoutController } from './checkout/checkout.controller';
import { DrawService } from './draw/draw.service';
import { CheckoutService } from './checkout/checkout.service';
import { QrService } from './qr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Qr, Draw, Checkout]), AuthModule],
  controllers: [QrController, DrawController, CheckoutController],
  exports: [TypeOrmModule],
  providers: [DrawService, CheckoutService, QrService]
})
export class QrModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(QrStringParserMiddleware).forRoutes({
      path: 'qr',
      method: RequestMethod.POST
    })
  }
}
