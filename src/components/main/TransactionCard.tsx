import styled from "styled-components";

import { ReceiveIcon, SendIcon } from "@/icons";

import { Transaction } from "@/models";

const capitalize = (input: string) => {
  if (input.length < 1) {
    return input;
  }

  return input.slice(0, 1).toUpperCase() + input.slice(1);
};

export function TransactionCard({
  hash,
  type,
  amount,
  resultbalance,
  createdAt,
}: Transaction) {
  const month = createdAt.getMonth() + 1;
  const day = createdAt.getDate();

  return (
    <Wrapper>
      <IconWrapper>
        {type === "receive" ? <ReceiveIcon /> : <SendIcon />}
      </IconWrapper>
      <Col side="left">
        <b>{capitalize(type)}</b>
        <p>{`${month}.${day}. De: ${hash.slice(0, 8)}...${hash.slice(-4)}`}</p>
      </Col>
      <Col side="right">
        <b>{amount} ETH</b>
        <p>{resultbalance} ETH</p>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 6.4rem;
  padding: 0 1.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray7};

  transition: all 0.3s;
  &: hover {
    background-color: ${({ theme }) => theme.colors.gray8};
  }

  & * {
    font-size: 1.2rem;
  }
  & b {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 500;
  }
  & p {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray7};
`;

const Col = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ side }) => (side === "left" ? "flex-start" : "flex-end")};
  justify-content: center;

  height: 100%;
  ${({ side }) => side === "left" && "margin-right: auto;"}
`;
