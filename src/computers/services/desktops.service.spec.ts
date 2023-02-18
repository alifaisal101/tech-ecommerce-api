import { Test, TestingModule } from '@nestjs/testing';
import { DesktopsService } from './desktops.service';

describe('DesktopsService', () => {
  let service: DesktopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesktopsService],
    }).compile();

    service = module.get<DesktopsService>(DesktopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
