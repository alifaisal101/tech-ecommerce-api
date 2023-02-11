import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsMangController } from './controllers/products-mang.controller';
import { ProductsService } from './services/products.service';
import { ProductsMangService } from './services/products-mang.service';

@Module({
  controllers: [ProductsController, ProductsMangController],
  providers: [ProductsService, ProductsMangService],
})
export class ProductsModule {}
