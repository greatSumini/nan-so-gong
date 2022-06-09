import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

import { rem } from "@/helpers";

type LayoutProps = {
  /** @default 640 */
  width?: number | string;
  /** @default 480 */
  height?: number | string;

  children: ReactNode;

  style?: CSSProperties;
};

export function Layout(props: LayoutProps) {
  const propsWithDefault: Required<LayoutProps> = {
    width: 640,
    height: 480,
    style: {},
    ...props,
  };

  return <Wrapper {...propsWithDefault} />;
}

const Wrapper = styled.main<{
  width: number | string;
  height: number | string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
  padding: 3.2rem 2.4rem;
  border-radius: 0.4rem;

  box-shadow: 0px 24px 48px 32px rgba(0, 0, 0, 0.08);
`;
