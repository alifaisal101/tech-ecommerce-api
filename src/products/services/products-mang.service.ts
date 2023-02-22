import { Injectable } from '@nestjs/common';
import { ProductApproveDto } from '../dtos/req/product-approve.dto';

@Injectable()
export class ProductsMangService {
  async approve(productApprove: ProductApproveDto) {
    console.log(productApprove);
  }
}
