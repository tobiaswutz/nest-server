/*
  Warnings:

  - You are about to drop the column `transactionListId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `transaction_lists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `collectionId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transaction_lists" DROP CONSTRAINT "transaction_lists_userId_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_transactionListId_fkey";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transactionListId",
ADD COLUMN     "collectionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "transaction_lists";

-- CreateTable
CREATE TABLE "collections" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
