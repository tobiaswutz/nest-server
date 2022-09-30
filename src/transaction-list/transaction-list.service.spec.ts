import { Test, TestingModule } from '@nestjs/testing';
import { TransactionListService } from './transaction-list.service';

describe('TransactionListService', () => {
  let service: TransactionListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionListService],
    }).compile();

    service = module.get<TransactionListService>(TransactionListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
