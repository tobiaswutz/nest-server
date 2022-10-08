import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollectionDto, EditCollectionDto } from './dto';

@Injectable()
export class CollectionService {
    constructor(
        private prisma: PrismaService,
    ) { }

    getCollections(userId: number) {
        return this.prisma.collection.findMany({
            where: {
                userId,
            },
        });
    }


    getCollectionById(userId: number, collectionId: number) {
        return this.prisma.collection.findFirst({
            where: {
                id: collectionId,
                userId,
            },
        });
    }


    async createCollection(userId: number, dto: CreateCollectionDto) {
        const collection = await this.prisma.collection.create({
            data: {
                userId,
                ...dto,
            },
        });

        return collection;
    }


    async eidtCollectionById(userId: number, collectionId: number, dto: EditCollectionDto) {
        const collection = await this.prisma.collection.findUnique({
            where: {
                id: collectionId,
            },
        });
        if (!collection || collection.userId !== userId) throw new ForbiddenException('no access');

        return this.prisma.collection.update({
            where: {
                id: collectionId,
            },
            data: {
                ...dto,
            },
        });
    }


    async deleteCollectionById(userId: number, collectionId: number) {
        const collection = await this.prisma.collection.findUnique({
            where: {
                id: collectionId,
            },
        });
        if (!collection || collection.userId !== userId) throw new ForbiddenException('no access');

        await this.prisma.collection.delete({
            where: {
                id: collectionId,
            },
        });

    }
}
