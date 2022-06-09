import styled from "styled-components";

import { Wallet } from "@/models";

export function WalletCard({
  name,
  balance,
}: Pick<Wallet, "name" | "balance">) {
  return (
    <Wrapper>
      <b>{name}</b>
      <p>{balance}</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  width: 100%;
  height: 6.4rem;
  padding-left: 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray7};

  transition: all 0.3s;
  &: hover {
    background-color: ${({ theme }) => theme.colors.gray8};
  }

  & > * {
    font-size: 1.2rem;
  }
  & > b {
    color: ${({ theme }) => theme.colors.gray1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;
