import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMangService } from './products-mang.service';

describe('ProductsMangService', () => {
  let service: ProductsMangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsMangService],
    }).compile();

    service = module.get<ProductsMangService>(ProductsMangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
