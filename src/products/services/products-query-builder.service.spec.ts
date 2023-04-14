import { Test, TestingModule } from '@nestjs/testing';
import { ProductsQueryBuilderService } from './products-query-builder.service';

describe('ProductsQueryBuilderService', () => {
  let service: ProductsQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsQueryBuilderService],
    }).compile();

    service = module.get<ProductsQueryBuilderService>(ProductsQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
