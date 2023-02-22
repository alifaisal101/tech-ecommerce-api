import { Body, Controller, Patch } from '@nestjs/common';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { IsAuthorized } from 'src/guards/authorization.guard';
import { ProductApproveDto } from '../dtos/req/product-approve.dto';
import { ProductsMangService } from '../services/products-mang.service';

@IsAuthorized(['admin', 'manager']) // 2st
@IsAuthenticated() // 1st
@Controller('products-mang')
export class ProductsMangController {
  constructor(private readonly productsMangSrv: ProductsMangService) {}

  @Patch('/approve')
  async approve(@Body() body: ProductApproveDto) {
    return await this.productsMangSrv.approve(body);
  }
}
