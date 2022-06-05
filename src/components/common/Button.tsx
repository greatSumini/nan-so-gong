import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import { rem } from "@/helpers";

type ButtonProps = {
  /** @default '100%'' */
  width?: number | string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
};

export function Button({ href, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <Wrapper {...props} />
      </Link>
    );
  }

  return <Wrapper {...props} />;
}

const Wrapper = styled.a<{ width?: number | string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${(props) => rem(props.width) ?? "100%"};
  height: 6.4rem;

  color; ${({ theme }) => theme.colors.gray1};
  font-size: 2.8rem;
  font-weight: 700;


  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.gray7};
  transition: all 0.2s;
  &: hover {
    background-color: #ddd;
  }
`;
