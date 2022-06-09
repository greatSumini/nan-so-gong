export type Transaction = {
  hash: string;
  type: "receive" | "send";
  amount: number;
  resultbalance: number;
  createdAt: Date;
};

export class Wallet {
  address: string;
  name: string;
  type: string;
  transactions: Transaction[];

  constructor(config: { type: string; name: string }, startBalance?: number) {
    this.address = "lx28b-eaaczx28b-eaacnx28b-eaac";
    this.name = config.name;
    this.type = config.type;
    this.transactions = [];

    if (startBalance > 0) {
      this.addTransaction({
        type: "receive",
        amount: startBalance,
      });
    }
  }

  get balance(): number {
    return this.transactions.reduce(
      (acc, curr) => acc + curr.amount * (curr.type === "receive" ? 1 : -1),
      0
    );
  }

  addTransaction(payload: Pick<Transaction, "type" | "amount">) {
    this.transactions.push({
      ...payload,
      hash: Math.random().toString().slice(0, 20),
      resultbalance: this.balance + payload.amount,
      createdAt: new Date(),
    });
  }
}
