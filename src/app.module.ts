import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhoneModule } from './phone/phone.module';

const username = process.env.POSTGRES_USER || 'a0319139_nest-ss';
const password = process.env.POSTGRES_PASSWORD || '123';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'wedinvite.ru',
      port: 3306,
      username,
      password,
      database: 'a0319139_nest-ss',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    PhoneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
