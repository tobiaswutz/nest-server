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

    @Get(':collectionId')
    getTransactionByCollectionId(@GetUser('id') userid: number, @Param('collectionId', ParseIntPipe) collectionId: number) {
        return this.transactionsService.getTransactionsByCollectionId(userid, collectionId);
    }



    //get transactions paginated
    @Get(':collectionId/:page/:take')
    getTransactionByCollectionIdPaginated(@GetUser('id') userid: number, @Param('collectionId', ParseIntPipe) collectionId: number, @Param('page', ParseIntPipe) page: number, @Param('take', ParseIntPipe) take: number) {
        return this.transactionsService.getTransactionsByCollectionIdPaginated(userid, collectionId, page, take);
    }


    @Get(':transactionId')
    getTransactionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) transactionId: number) {
        return this.transactionsService.getTransactionById(userid, transactionId);
    }

    @Post(':collectionId')
    createTransaction(@GetUser('id') userid: number, @Param('collectionId', ParseIntPipe) collectionId: number, @Body() dto: CreateTransactionDto) {
        return this.transactionsService.createTransaction(userid, collectionId, dto);
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
