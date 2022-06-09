export type Transaction = {
  hash: string;
  type: "receive" | "send";
  amount: number;
  resultbalance: number;
  createdAt: Date;
};

export class Wallet {
  transactions: Transaction[];

  constructor(private readonly privateKey: string) {
    this.transactions = [];
  }

  get balance(): number {
    return this.transactions.reduce(
      (acc, curr) => acc + curr.amount * (curr.type === "receive" ? 1 : -1),
      0
    );
  }

  addTransaction(payload: Pick<Transaction, "hash" | "type" | "amount">) {
    this.transactions.push({
      ...payload,
      resultbalance: this.balance + payload.amount,
      createdAt: new Date(),
    });
  }
}
