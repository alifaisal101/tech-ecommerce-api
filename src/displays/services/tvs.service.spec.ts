import { Test, TestingModule } from '@nestjs/testing';
import { TvsService } from './tvs.service';

describe('TvsService', () => {
  let service: TvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TvsService],
    }).compile();

    service = module.get<TvsService>(TvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
