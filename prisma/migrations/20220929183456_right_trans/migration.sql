/*
  Warnings:

  - You are about to drop the column `feeAmount` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `feeSymbol` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `inflowAmount` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `inflowSymbol` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `inflowSymbolUsdPrice` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `outflowAmount` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbol` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbolUsdPrice` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `tradingPlatform` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `transactionTime` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `walletAddress` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `transactionType` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `link` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feeAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feeSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowSymbolUsdPrice` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbolUsdPrice` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tradingPlatform` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionTime` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walletAddress` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "feeAmount",
DROP COLUMN "feeSymbol",
DROP COLUMN "inflowAmount",
DROP COLUMN "inflowSymbol",
DROP COLUMN "inflowSymbolUsdPrice",
DROP COLUMN "outflowAmount",
DROP COLUMN "outflowSymbol",
DROP COLUMN "outflowSymbolUsdPrice",
DROP COLUMN "tradingPlatform",
DROP COLUMN "transactionId",
DROP COLUMN "transactionTime",
DROP COLUMN "walletAddress",
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "amount",
DROP COLUMN "transactionType",
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
