import { Wallet, Transaction } from "@/models";

const wallets: { [privateKey: string]: Wallet } = {};

class WalletService {
  private getWallet(privateKey: string) {
    const wallet = wallets[privateKey];
    if (!wallet) {
      throw new Error("일치하는 지갑을 찾을 수 없습니다.");
    }
    return wallet;
  }
  private addTransaction(
    payload: Pick<Transaction, "hash" | "type" | "amount">,
    privateKey: string
  ) {
    this.getWallet(privateKey).addTransaction(payload);
  }

  create(privateKey: string) {
    // wallets[privateKey] = new Wallet();
  }
  receive(hash: string, amount: number, privateKey: string) {
    this.addTransaction({ hash, type: "receive", amount }, privateKey);
  }
  send(hash: string, amount: number, privateKey: string) {
    this.addTransaction({ hash, type: "send", amount }, privateKey);
  }
}

export default new WalletService();
