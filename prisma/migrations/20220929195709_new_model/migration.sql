/*
  Warnings:

  - Added the required column `inflowAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inflowSymbolUsdPrice` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowAmount` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbol` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outflowSymbolUsdPrice` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionTime` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "description" TEXT,
ADD COLUMN     "feeAmount" DECIMAL(65,30),
ADD COLUMN     "feeSymbol" TEXT,
ADD COLUMN     "inflowAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "inflowSymbolUsdPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "outflowAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "outflowSymbol" TEXT NOT NULL,
ADD COLUMN     "outflowSymbolUsdPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "tradingPlatform" TEXT,
ADD COLUMN     "transactionId" TEXT,
ADD COLUMN     "transactionTime" TEXT NOT NULL,
ADD COLUMN     "walletAddress" TEXT;
