import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MONGODB_URI } from './config';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(MONGODB_URI),
    ProductsModule,
    MailModule,
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
