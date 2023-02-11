import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMangController } from './products-mang.controller';

describe('ProductsMangController', () => {
  let controller: ProductsMangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsMangController],
    }).compile();

    controller = module.get<ProductsMangController>(ProductsMangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
