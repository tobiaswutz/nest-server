import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionListDto, EditTransactionListDto } from './dto';

@Injectable()
export class TransactionListService {
    constructor(
        private prisma: PrismaService,
    ) { }

    getTransactionlists(userId: number) {
        return this.prisma.transactionList.findMany({
            where: {
                userId,
            },
        });
    }


    getTransactionlistById(userId: number, transactionListId: number) {
        return this.prisma.transactionList.findFirst({
            where: {
                id: transactionListId,
                userId,
            },
        });
    }


    async createTransactionlist(userId: number, dto: CreateTransactionListDto) {
        const transactionList = await this.prisma.transactionList.create({
            data: {
                userId,
                ...dto,
            },
        });

        return transactionList;
    }


    async eidtTransactionlistById(userId: number, transactionListId: number, dto: EditTransactionListDto) {
        const transactionList = await this.prisma.transactionList.findUnique({
            where: {
                id: transactionListId,
            },
        });
        if (!transactionList || transactionList.userId !== userId) throw new ForbiddenException('no access');

        return this.prisma.transactionList.update({
            where: {
                id: transactionListId,
            },
            data: {
                ...dto,
            },
        });
    }


    async deleteTransactionlistById(userId: number, transactionListId: number) {
        const transactionList = await this.prisma.transactionList.findUnique({
            where: {
                id: transactionListId,
            },
        });
        if (!transactionList || transactionList.userId !== userId) throw new ForbiddenException('no access');

        await this.prisma.transactionList.delete({
            where: {
                id: transactionListId,
            },
        });

    }
}
