-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "transactionListId" INTEGER;

-- CreateTable
CREATE TABLE "transaction_lists" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "transaction_lists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction_lists" ADD CONSTRAINT "transaction_lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transactionListId_fkey" FOREIGN KEY ("transactionListId") REFERENCES "transaction_lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
