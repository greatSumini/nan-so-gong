import { ReactNode } from "react";
import styled from "styled-components";

type LabelRowProps = {
  label: string;
  children: ReactNode;
};

export function LabelRow({ label, children }: LabelRowProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
`;

const Label = styled.p`
  font-size: 2rem;
`;
