import { Test, TestingModule } from '@nestjs/testing';
import { AllInOnesService } from './all-in-ones.service';

describe('AllInOnesService', () => {
  let service: AllInOnesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllInOnesService],
    }).compile();

    service = module.get<AllInOnesService>(AllInOnesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
