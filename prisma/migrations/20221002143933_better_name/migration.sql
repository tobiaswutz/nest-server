/*
  Warnings:

  - You are about to drop the column `externalTransactionId` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "externalTransactionId",
ADD COLUMN     "externalId" TEXT;
