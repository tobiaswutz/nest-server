/*
  Warnings:

  - You are about to drop the column `description` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `feeAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `feeSymbol` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `inflowAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `inflowSymbolUsdPrice` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowAmount` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbol` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `outflowSymbolUsdPrice` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `tradingPlatform` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `transactionTime` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `walletAddress` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "description",
DROP COLUMN "feeAmount",
DROP COLUMN "feeSymbol",
DROP COLUMN "inflowAmount",
DROP COLUMN "inflowSymbolUsdPrice",
DROP COLUMN "outflowAmount",
DROP COLUMN "outflowSymbol",
DROP COLUMN "outflowSymbolUsdPrice",
DROP COLUMN "tradingPlatform",
DROP COLUMN "transactionId",
DROP COLUMN "transactionTime",
DROP COLUMN "walletAddress";
