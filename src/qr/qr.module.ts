import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { QrController } from './qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkout } from './entities/Checkout.entity';
import { Qr } from './entities/Qr.entity';
import { Draw } from './entities/Draw.entity';
import { QrStringParserMiddleware } from './qr-string-parser.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Checkout, Qr, Draw])],
  controllers: [QrController]
})
export class QrModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(QrStringParserMiddleware).forRoutes({
      path: 'qr',
      method: RequestMethod.POST
    })
  }
}
