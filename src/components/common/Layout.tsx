import { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  height: 48rem;
  padding: 3.2rem 2.4rem;
  border-radius: 0.4rem;

  box-shadow: 0px 24px 48px 32px rgba(0, 0, 0, 0.08);
`;
