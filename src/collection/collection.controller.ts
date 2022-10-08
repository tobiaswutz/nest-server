import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateCollectionDto, EditCollectionDto } from './dto';
import { CollectionService } from './collection.service';

@UseGuards(JwtGuard)
@Controller('collection')
export class CollectionController {

    constructor(
        private collectionService: CollectionService,
    ) { }

    @Get()
    getCollections(@GetUser('id') userid: number) {
        return this.collectionService.getCollections(userid);
    }

    @Get(':id')
    getCollectionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.collectionService.getCollectionById(userid, bookmarkId);
    }

    @Post()
    createCollection(@GetUser('id') userid: number, @Body() dto: CreateCollectionDto) {
        return this.collectionService.createCollection(userid, dto);
    }

    @Patch(':id')
    eidtCollectionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number, @Body() dto: EditCollectionDto) {
        return this.collectionService.eidtCollectionById(userid, bookmarkId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteCollectionById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.collectionService.deleteCollectionById(userid, bookmarkId);
    }

}
