/*
  Warnings:

  - You are about to drop the column `transactionId` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transactionId",
ADD COLUMN     "externalTransactionId" TEXT;
