import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, TransactionsModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
