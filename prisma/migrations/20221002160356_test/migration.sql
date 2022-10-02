-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transactionListId_fkey" FOREIGN KEY ("transactionListId") REFERENCES "transaction_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
