import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MONGODB_URI } from './config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(MONGODB_URI), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
