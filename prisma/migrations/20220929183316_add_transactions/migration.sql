/*
  Warnings:

  - You are about to drop the column `link` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `bookmarks` table. All the data in the column will be lost.
  - Added the required column `feeAmount` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feeSymbol` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowAmount` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowSymbol` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowSymbolUsdPrice` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowAmount` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbol` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbolUsdPrice` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tradingPlatform` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionTime` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walletAddress` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `bookmarks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "link",
DROP COLUMN "title",
ADD COLUMN     "feeAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "feeSymbol" TEXT NOT NULL,
ADD COLUMN     "inflowAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "inflowSymbol" TEXT NOT NULL,
ADD COLUMN     "inflowSymbolUsdPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "outflowAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "outflowSymbol" TEXT NOT NULL,
ADD COLUMN     "outflowSymbolUsdPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tradingPlatform" TEXT NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL,
ADD COLUMN     "transactionTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "walletAddress" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT,
    "transactionType" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
