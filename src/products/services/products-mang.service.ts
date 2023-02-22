import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductApproveDto } from '../dtos/req/product-approve.dto';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsMangService {
  constructor(private readonly productsSrv: ProductsService) {}

  async approve(productApprove: ProductApproveDto) {
    const { productId, approve } = productApprove;
    const product = (await this.productsSrv.findById(productId)) || false;
    if (!product) {
      throw new NotFoundException('No product with that id was found');
    }

    product.approvalState = approve;
    if (!approve && productApprove.remove) {
      return product.remove();
    } else if (!approve) {
      product.disapproved = true;
    }

    // eslint-disable-next-line
    //@ts-ignore
    return product._doc;
  }
}
