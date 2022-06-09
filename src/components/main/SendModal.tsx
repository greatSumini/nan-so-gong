import { Modal, ModalProps } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Input, LabelRow } from "../common";

export function SendModal(
  props: Pick<ModalProps, "visible" | "onCancel"> & {
    onComplete: (data: { to: string; type: string; amount: number }) => void;
  }
) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Modal {...props} centered footer={[]}>
      <Wrapper>
        <LabelRow label="보낼 주소">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            width={240}
          />
        </LabelRow>
        <LabelRow label="자산">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            width={240}
          />
        </LabelRow>
        <LabelRow label="금액">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            width={240}
          />
        </LabelRow>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;

  width: 37.2rem;
`;
