import { Module } from '@nestjs/common';
import { TransactionListService } from './transaction-list.service';
import { TransactionListController } from './transaction-list.controller';

@Module({
  providers: [TransactionListService],
  controllers: [TransactionListController]
})
export class TransactionListModule {}
