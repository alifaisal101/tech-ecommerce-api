import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsMangController } from './controllers/products-mang.controller';
import { ProductsService } from './services/products.service';
import { ProductsMangService } from './services/products-mang.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entites/product.entity';

@Module({
  controllers: [ProductsController, ProductsMangController],
  providers: [ProductsService, ProductsMangService],
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
})
export class ProductsModule {}
