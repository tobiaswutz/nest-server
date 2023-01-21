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

    async getTransactionsByCollectionIdPaginated(userId: number, collectionId: number, page: number, take: number) {
        const skip = take * (page - 1);

        const numberOfTransactions = await this.prisma.transaction.count({
            where: {
                userId,
                collectionId,
            },
        });

        const transactions = await this.prisma.transaction.findMany({
            where: {
                userId,
                collectionId,
            },
            orderBy: {
                filledTime: 'desc',
            },
            take,
            skip,
        });

        return {
            page,
            numberOfTransactions,
            transactions,
        };
    }

    async searchTransactionsByCollectionIdAndSearchStringPaginated(userId: number, collectionId: number, page: number, take: number, searchString: string) {
        console.log('searchTransactionsByCollectionIdAndSearchStringPaginated', userId, collectionId, page, take, searchString);

        const skip = take * (page - 1);

        const numberOfTransactions = await this.prisma.transaction.count({
            where: {
                userId,
                collectionId,
                AND: {
                    OR: [
                        { baseSymbol: { contains: searchString, mode: 'insensitive', }, },
                        { quoteSymbol: { contains: searchString, mode: 'insensitive', } }
                    ],
                },
            },
        });



        const transactions = await this.prisma.transaction.findMany({
            where: {
                userId,
                collectionId,
                AND: {
                    OR: [
                        { baseSymbol: { contains: searchString, mode: 'insensitive', }, },
                        { quoteSymbol: { contains: searchString, mode: 'insensitive', } }
                    ],
                },
            },
            orderBy: {
                filledTime: 'desc',
            },
            take,
            skip,
        });



        console.log('numberOfTransactions', numberOfTransactions);
        console.log('transactions', transactions.length);


        return {
            page,
            numberOfTransactions,
            transactions,
        };
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
        console.log('createTransaction', userId, collectionId, dto);

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
