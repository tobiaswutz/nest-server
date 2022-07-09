import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {

    constructor(
        private bookmarkService: BookmarkService,
    ) { }

    @Get()
    getBookmarks(@GetUser('id') userid: number) {
        return this.bookmarkService.getBookmarks(userid);
    }

    @Get(':id')
    getBookmarkById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.getBookmarkById(userid, bookmarkId);
    }

    @Post()
    createBookmark(@GetUser('id') userid: number, @Body() dto: CreateBookmarkDto) {
        return this.bookmarkService.createBookmark(userid, dto);
    }

    @Patch(':id')
    eidtBookmarkById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number, @Body() dto: EditBookmarkDto) {
        return this.bookmarkService.eidtBookmarkById(userid, bookmarkId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteBookmarkById(@GetUser('id') userid: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.deleteBookmarkById(userid, bookmarkId);
    }

}
