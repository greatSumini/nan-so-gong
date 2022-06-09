import { useState } from "react";
import styled from "styled-components";

import { Button, Layout, Tab } from "@/components/common";
import { CopyIcon } from "@/icons";

import { CookieKey } from "@/constants";
import { getCookie } from "@/helpers";
import { useWeb3 } from "@/hooks";

const ETH_USD_EXCHANGE_RATE = 1813.09;

export default function MainPage() {
  const [tab, setTab] = useState<"asset" | "activity">("asset");

  const { account, balance } = useWeb3(getCookie(CookieKey.PRIVATE_KEY));

  return (
    <Layout height={540} style={{ padding: "3.2rem 0 0 0" }}>
      <Title>내 지갑</Title>
      <KeyRow>
        <KeyText>{(account?.address.slice(0, 10) ?? "") + "..."}</KeyText>
        <CopyIcon />
      </KeyRow>
      <Avatar src="/images/ethereum.png" />
      <Balance>{balance ?? "-"} ETH</Balance>
      <UsdBalance>
        ${balance != null ? balance * ETH_USD_EXCHANGE_RATE : "-"} USD
      </UsdBalance>
      <ButtonRow>
        <Button size="small">보내기</Button>
        <Button size="small">토큰 가져오기</Button>
      </ButtonRow>
      <Tab
        value={tab}
        onChange={setTab}
        items={[
          { label: "자산", value: "asset" },
          { label: "활동", value: "activity" },
        ]}
      />
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

const KeyText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray5};
  margin-right: 0.8rem;
`;

const KeyRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.4rem;

  cursor: pointer;
`;

const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 2.8rem;
  border-radius: 50%;

  object-fit: cover;

  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.08);
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
