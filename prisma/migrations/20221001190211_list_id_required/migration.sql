/*
  Warnings:

  - Made the column `transactionListId` on table `transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_transactionListId_fkey";

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "transactionListId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transactionListId_fkey" FOREIGN KEY ("transactionListId") REFERENCES "transaction_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
