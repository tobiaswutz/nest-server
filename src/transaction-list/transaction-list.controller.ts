import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateTransactionListDto, EditTransactionListDto } from './dto';
import { TransactionListService } from './transaction-list.service';

@UseGuards(JwtGuard)
@Controller('transaction-list')
export class TransactionListController {

    constructor(
        private transactionListService: TransactionListService,
    ) { }

    @Get()
    getTransactionlists(@GetUser('id') userid: number) {
        return this.transactionListService.getTransactionlists(userid);
    }

    @Get(':id')
    getTransactionlistById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.transactionListService.getTransactionlistById(userid, bookmarkId);
    }

    @Post()
    createTransactionlist(@GetUser('id') userid: number, @Body() dto: CreateTransactionListDto) {
        return this.transactionListService.createTransactionlist(userid, dto);
    }

    @Patch(':id')
    eidtTransactionlistById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number, @Body() dto: EditTransactionListDto) {
        return this.transactionListService.eidtTransactionlistById(userid, bookmarkId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteTransactionlistById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.transactionListService.deleteTransactionlistById(userid, bookmarkId);
    }

}
