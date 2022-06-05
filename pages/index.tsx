import styled from "styled-components";

import { Layout, Button } from "@/components/common";

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.red};
`;

export default function HomePage() {
  return (
    <Layout>
      <Title>Hello 난소공!</Title>
      <Button>안녕하세요!</Button>
    </Layout>
  );
}
