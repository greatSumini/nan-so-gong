import { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import { Account, WalletBase } from "web3-core";
import { Accounts } from "web3-eth-accounts";

const NETWORK_URL = "http://localhost:8515/";

export const useWeb3 = (privateKey: string) => {
  const web3 = useRef<Web3>();

  const [account, setAccout] = useState<Account>();
  const [wallets, setWallets] = useState<WalletBase>();
  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    web3.current = new Web3(NETWORK_URL);
  }, []);

  useEffect(() => {
    if (!privateKey) {
      return;
    }

    setAccout(web3.current.eth.accounts.privateKeyToAccount(privateKey));
    setWallets(web3.current.eth.accounts.wallet);
  }, [privateKey]);

  useEffect(() => {
    if (!account) {
      return;
    }

    (async () => {
      setBalance(
        Number(
          web3.current.utils.fromWei(
            await web3.current.eth.getBalance(account.address)
          )
        )
      );
    })();
  }, [account]);

  const createAccount = (): Account => {
    return web3.current.eth.accounts.create();
  };

  const signTransaction = async (to: string, value: number, gas: number) => {
    return await account.signTransaction({
      to,
      value,
      gas,
    });
  };

  return {
    account,
    balance,
    wallets,
    createAccount,
    signTransaction,
  };
};
