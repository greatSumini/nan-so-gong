import { useMemo, useState } from "react";
import styled from "styled-components";
import { message } from "antd";

import { Button, Layout, Tab } from "@/components/common";
import {
  SendModal,
  WalletCard,
  TransactionCard,
  AddTokenModal,
} from "@/components/main";
import { CopyIcon } from "@/icons";

import { CookieKey } from "@/constants";
import { getCookie } from "@/helpers";
import { useWeb3 } from "@/hooks";
import { TransactionService } from "@/services";
import { Transaction } from "@/models";

const ETH_USD_EXCHANGE_RATE = 1813.09;

type ModalType = "send" | "addToken";
export default function MainPage() {
  const [tab, setTab] = useState<"asset" | "activity">("asset");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [modalState, setModalState] = useState<Record<ModalType, boolean>>({
    send: false,
    addToken: false,
  });
  const toggleModal = (type: ModalType) => () => {
    setModalState((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const { account, balance, signTransaction, wallets } = useWeb3(
    getCookie(CookieKey.PRIVATE_KEY)
  );

  const [selected, setSelected] = useState(0);
  const wallet = wallets?.length > selected ? wallets[selected] : null;

  const copyAddress = () => {
    message.success("주소가 클립보드에 복사되었어요 😉");
  };

  const balanceText = balance ?? "-";
  const usdBalanceText =
    balance != null ? (balance * ETH_USD_EXCHANGE_RATE).toFixed(2) : "-";

  const send = (to: string, amount: number, gas: number) => {
    signTransaction(to, amount, gas);

    setTransactions(
      TransactionService.add({
        type: "send",
        amount,
      })
    );
  };

  return (
    <>
      <Layout height={540} style={{ padding: "3.2rem 0 0 0" }}>
        <Title>내 지갑</Title>
        <AddressRow onClick={copyAddress}>
          <AddressText>{account?.address.slice(0, 10) + "..."}</AddressText>
          <CopyIcon />
        </AddressRow>
        <Avatar src="/images/ethereum.png" />
        <Balance>{balanceText} ETH</Balance>
        <UsdBalance>${usdBalanceText} USD</UsdBalance>
        <ButtonRow>
          <Button size="small" onClick={toggleModal("send")}>
            보내기
          </Button>
          <Button size="small" onClick={toggleModal("addToken")}>
            토큰 가져오기
          </Button>
        </ButtonRow>
        <Tab
          value={tab}
          onChange={setTab}
          items={[
            { label: "자산", value: "asset" },
            { label: "활동", value: "activity" },
          ]}
        />
        <List>
          {tab === "asset" && <WalletCard name="이더리움" balance={balance} />}
          {tab === "activity" &&
            transactions.map((v) => <TransactionCard key={v.type} {...v} />)}
        </List>
      </Layout>
      <SendModal
        visible={modalState.send}
        onCancel={toggleModal("send")}
        onComplete={({ to, type, amount }) => {
          send(to, amount, 0);
        }}
      />
      <AddTokenModal
        visible={modalState.addToken}
        onCancel={toggleModal("addToken")}
        onComplete={({ address, symbol, decimal }) => {
          // add(symbol);
        }}
      />
    </>
  );
}

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

const AddressText = styled.p`
  margin-right: 0.8rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray5};

  user-select: none;
`;

const AddressRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 0.4rem;
  margin-bottom: 2.4rem;

  cursor: pointer;

  transition: all 0.3s;
  &: hover {
    background-color: ${({ theme }) => theme.colors.gray8};
  }
`;

const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 2.8rem;
  border-radius: 50%;

  object-fit: cover;

  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.08);

  user-select: none;
`;

const Balance = styled.p`
  margin-bottom: 1.2rem;

  font-size: 3.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray1};
`;

const UsdBalance = styled.p`
  margin-bottom: 1.6rem;

  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray5};
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  margin-bottom: 3.2rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0;

  list-style: none;
`;
