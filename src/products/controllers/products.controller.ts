import {
  Body,
  Controller,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { validators } from 'src/validators/product-image.validators';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { UserDocument } from 'src/users/entities/users.entity';
import { CreateDto } from '../dtos/req/create.dto';
import { ProductsService } from '../services/products.service';
import { UploadImagesDto } from '../dtos/req/upload-images.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsSrv: ProductsService) {}
  @IsAuthenticated()
  @Post('/add')
  async create(
    @Body() body: CreateDto,
    @CurrentUser() user: Partial<UserDocument>,
  ) {
    return await this.productsSrv.create(body, user.id);
  }

  @UseInterceptors(FilesInterceptor('images'))
  @IsAuthenticated()
  @Post('/images')
  async uploadImages(
    @CurrentUser() user: Partial<UserDocument>,
    @UploadedFiles(
      new ParseFilePipe({
        validators,
      }),
    )
    images: Array<Express.Multer.File>,
    @Body() body: UploadImagesDto,
  ) {
    return await this.productsSrv.uploadImages(body.productId, images, user);
  }
}
