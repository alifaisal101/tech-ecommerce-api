import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MONGODB_URI } from './config';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { MailModule } from './mail/mail.module';
import { ComputersModule } from './computers/computers.module';
import { DrivesModule } from './drives/drives.module';
import { DisplaysModule } from './displays/displays.module';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(MONGODB_URI),
    ProductsModule,
    MailModule,
    ComputersModule,
    DrivesModule,
    DisplaysModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
