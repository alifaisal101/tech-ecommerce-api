import { Injectable } from '@nestjs/common';
import { isNotEmptyObject } from 'class-validator';
import { PipelineStage } from 'mongoose';
import { products_per_page } from 'src/config';
import { FindDto } from '../dtos/req/find.dto';

@Injectable()
export class ProductsQueryBuilderService {
  buildFind(body: FindDto) {
    const pipelineStages: PipelineStage[] = [];
    const skip = ((body.page || 1) - 1) * products_per_page;

    // If body is empty
    if (!isNotEmptyObject(body)) {
      pipelineStages.push({ $match: {} });
    } else {
      if (body.title) {
        pipelineStages.push({
          $match: { title: { $regex: body.title, $options: 'i' } },
        });
      }
    }
    pipelineStages.push({ $skip: skip }, { $limit: products_per_page });
    return pipelineStages;
  }
}
