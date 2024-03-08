import { Transaction } from '../interfaces/BalanceData';

export function transactionsWithIDs(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    return {
      description: transaction.description,
      amount: transaction.amount,
      date: transaction.date,
      id: Date.now() + Math.random(),
      ...(transaction.from && { from: transaction.from }),
      ...(transaction.to && { to: transaction.to })
    };
  });
}