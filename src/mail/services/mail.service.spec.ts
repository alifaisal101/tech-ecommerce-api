import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId } from 'mongodb';
import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailService],
    }).compile();

    service = module.get<MailService>(MailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('sends an email to the destenation', async () => {
    const to = 'alifais1122@gmail.com';
    const userId = new ObjectId() as any;
    const confirmHash = '12312asd12dw1';

    const result = await service.confirmation(to, userId, confirmHash);
    console.log(result);
  });
});
