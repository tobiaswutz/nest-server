import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto, EditTransactionDto } from './dto';

@Injectable()
export class TransactionsService {

    constructor(
        private prisma: PrismaService,
    ) { }

    getTransactionsByCollectionId(userId: number, collectionId: number) {
        return this.prisma.transaction.findMany({
            where: {
                userId,
                collectionId,
            },
        });
    }


    getTransactionById(userId: number, transactionId: number) {
        return this.prisma.transaction.findFirst({
            where: {
                userId,
                id: transactionId,
            },
        });
    }


    async createTransaction(userId: number, collectionId: number, dto: CreateTransactionDto) {
        const transaction = await this.prisma.transaction.create({
            data: {
                userId,
                collectionId,
                ...dto,
            },
        });
        return transaction;
    }

    async editTransactionById(userId: number, transactionId: number, dto: EditTransactionDto) {
        const transaction = await this.prisma.transaction.findUnique({
            where: {
                id: transactionId,
            },
        });
        if (!transaction || transaction.userId !== userId) throw new ForbiddenException('no access');

        return this.prisma.transaction.update({
            where: {
                id: transactionId,
            },
            data: {
                ...dto,
            },
        });
    }

    async deleteTransactionById(userId: number, transactionId: number) {
        const transaction = await this.prisma.transaction.findUnique({
            where: {
                id: transactionId,
            },
        });
        if (!transaction || transaction.userId !== userId) throw new ForbiddenException('no access');

        return this.prisma.transaction.delete({
            where: {
                id: transactionId,
            },
        });
    }
}
