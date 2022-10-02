/*
  Warnings:

  - You are about to drop the column `description` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `inflowAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `inflowSymbol` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `inflowSymbolUsdPrice` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbol` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbolUsdPrice` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `tradingPlatform` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `transactionTime` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `walletAddress` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `baseAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filledTime` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quoteAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quoteSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `side` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "description",
DROP COLUMN "inflowAmount",
DROP COLUMN "inflowSymbol",
DROP COLUMN "inflowSymbolUsdPrice",
DROP COLUMN "outflowAmount",
DROP COLUMN "outflowSymbol",
DROP COLUMN "outflowSymbolUsdPrice",
DROP COLUMN "tradingPlatform",
DROP COLUMN "transactionTime",
DROP COLUMN "walletAddress",
ADD COLUMN     "baseAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "baseSymbol" TEXT NOT NULL,
ADD COLUMN     "exchange" TEXT,
ADD COLUMN     "filledTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quoteAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quoteSymbol" TEXT NOT NULL,
ADD COLUMN     "side" TEXT NOT NULL;
