import { Test, TestingModule } from '@nestjs/testing';
import { SendPasswordMailService } from './send-password-mail.service';

describe('SendPasswordMailService', () => {
  let service: SendPasswordMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendPasswordMailService],
    }).compile();

    service = module.get<SendPasswordMailService>(SendPasswordMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
