export type Transaction = {
  hash: string;
  type: "receive" | "send";
  amount: number;
  resultbalance: number;
  createdAt: Date;
};

const transactions: Transaction[] = [];

class TransactionService {
  list() {
    return transactions;
  }

  add(payload: Pick<Transaction, "type" | "amount">) {
    const balance = transactions.reduce(
      (acc, curr) => acc + curr.amount * (curr.type === "receive" ? 1 : -1),
      0
    );

    transactions.push({
      ...payload,
      hash: Math.random().toString().slice(0, 20),
      resultbalance: balance + payload.amount,
      createdAt: new Date(),
    });

    return transactions;
  }
}

export default new TransactionService();
