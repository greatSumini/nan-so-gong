import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

import { rem } from "@/helpers";

type InputProps = {
  label?: string;
  /** @default '100%'' */
  width?: number | string;

  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;

  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function Input(props: InputProps) {
  const { label, width, ...inputProps } = props;

  return (
    <Wrapper width={width}>
      {label != null && <LabelText>{label}</LabelText>}
      <StyledInput {...inputProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ width?: number | string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${(props) => rem(props.width) ?? "100%"};
  height: fit-content;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 4.8rem;
  padding-left: 1.6rem;

  font-size: 2.4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  border-radius: 0.4rem;
  outline: none;

  transition: all 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const LabelText = styled.label`
  margin: 0 0 1.2rem 0;

  color: ${({ theme }) => theme.colors.gray3};
  font-size: 1.6rem;
`;
