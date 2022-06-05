import styled from "styled-components";

import { Layout, Button, Input } from "@/components/common";

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.red};
`;

export default function HomePage() {
  return (
    <Layout>
      <Title>Hello 난소공!</Title>
      <Input
        label="새 비밀번호"
        value="sdfdsdsf"
        onChange={console.log}
        type="password"
      />
      <Button>안녕하세요!</Button>
    </Layout>
  );
}
