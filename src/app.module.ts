import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MONGODB_URI } from './config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(MONGODB_URI), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
