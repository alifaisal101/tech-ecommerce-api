import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsMangController } from './controllers/products-mang.controller';
import { ProductsService } from './services/products.service';
import { ProductsMangService } from './services/products-mang.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entites/product.entity';
import { ComputersModule } from 'src/computers/computers.module';
import { DrivesModule } from 'src/drives/drives.module';
import { DisplaysModule } from 'src/displays/displays.module';

@Module({
  controllers: [ProductsController, ProductsMangController],
  providers: [ProductsService, ProductsMangService],
  imports: [
    UsersModule,
    ProductsModule,
    ComputersModule,
    DrivesModule,
    DisplaysModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
})
export class ProductsModule {}
