import { Test, TestingModule } from '@nestjs/testing';
import { TransactionListController } from './transaction-list.controller';

describe('TransactionListController', () => {
  let controller: TransactionListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionListController],
    }).compile();

    controller = module.get<TransactionListController>(TransactionListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
