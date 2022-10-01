import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateTransactionDto, EditTransactionDto } from './dto';
import { TransactionsService } from './transactions.service';

@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionsController {

    constructor(
        private transactionsService: TransactionsService,
    ) { }

    @Get(':transactionListId')
    getTransactionByTransactionListId(@GetUser('id') userid: number, @Param('transactionListId', ParseIntPipe) transactionListId: number) {
        return this.transactionsService.getTransactionsByTransactionListId(userid, transactionListId);
    }

    @Get(':transactionId')
    getTransactionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) transactionId: number) {
        return this.transactionsService.getTransactionById(userid, transactionId);
    }

    @Post(':transactionListId')
    createTransaction(@GetUser('id') userid: number, @Param('transactionListId', ParseIntPipe) transactionListId: number, @Body() dto: CreateTransactionDto) {
        return this.transactionsService.createTransaction(userid, transactionListId, dto);
    }

    @Patch(':id')
    editTransactionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) transactionId: number, @Body() dto: EditTransactionDto) {
        return this.transactionsService.editTransactionById(userid, transactionId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteTransactionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) transactionId: number) {
        return this.transactionsService.deleteTransactionById(userid, transactionId);
    }
}
