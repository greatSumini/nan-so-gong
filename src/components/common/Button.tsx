import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import { rem } from "@/helpers";

const buttonSizes = ["small", "medium"] as const;
type ButtonSize = typeof buttonSizes[number];

type ButtonProps = {
  /** @default '100%'' */
  width?: number | string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
  /** @default 'medium' */
  size?: ButtonSize;
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

const Wrapper = styled.a<{ width?: number | string; size?: ButtonSize }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${(props) => rem(props.width) ?? "100%"};
  height: 6.4rem;
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.colors.gray1};
  font-size: 2.8rem;
  font-weight: 700;

  cursor: pointer;
  user-select: none;

  background-color: ${({ theme }) => theme.colors.gray7};
  transition: all 0.2s;
  &: hover {
    background-color: #ddd;
    color: ${({ theme }) => theme.colors.black};
  }

  ${(props) =>
    props.size === "small" &&
    `
    width: fit-content;
    height: fit-content;
    padding: 1.2rem 2.4rem;

    font-size: 1.6rem;
  `}
`;
