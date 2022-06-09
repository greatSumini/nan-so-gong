import { useEffect, useState } from "react";
import { Wallet } from "@/models";

export const useWeb3Mock = () => {
  const [wallets, setWallets] = useState<Wallet[]>([new Wallet("eth", 0.4264)]);

  const send = (to: string, type: string, amount: number) => {
    const index = wallets.findIndex((v) => v.type === type);
    if (index < 0) {
      throw new Error("해당 자산을 보유하고 있지 않습니다.");
    }
    const wallet = wallets.find((v) => v.type === type);

    if (wallet.balance < amount) {
      throw new Error(`${type} 잔고가 부족합니다.`);
    }

    wallet.addTransaction({ type: "send", amount });

    setWallets((prev) => [
      ...prev.slice(0, index),
      wallet,
      ...prev.slice(index + 1),
    ]);
  };

  return {
    wallets,
    send,
  };
};
