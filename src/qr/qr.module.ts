import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { QrController } from './qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrStringParserMiddleware } from './qr-string-parser.middleware';
import { AuthModule } from '../auth/auth.module';
import { Qr } from './entities/qr.entity';
import { Draw } from './entities/draw.entity';
import { Checkout } from './entities/checkout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qr, Draw, Checkout]), AuthModule],
  controllers: [QrController],
  exports: [TypeOrmModule]
})
export class QrModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(QrStringParserMiddleware).forRoutes({
      path: 'qr',
      method: RequestMethod.POST
    })
  }
}
