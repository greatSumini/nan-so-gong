import styled from "styled-components";

import { Layout, Button } from "@/components/common";

export default function HomePage() {
  return (
    <Layout>
      <Logo src="/images/octo/default.png" />
      <Title>난쏘마스크에 오신 것을 환영합니다!</Title>
      <Description>
        안전하고 투명한 시스템으로 빠르고
        <br />
        편리한 거래 환경을 제공합니다
      </Description>
      <Row>
        <Button width={288}>지갑 생성</Button>
        <Button width={288}>지갑 가져오기</Button>
      </Row>
    </Layout>
  );
}

const Logo = styled.img`
  margin-bottom: auto;

  width: 20rem;
  height: 15rem;
`;

const Title = styled.h1`
  margin-bottom: 2.4rem;

  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

const Description = styled.p`
  margin-bottom: 4.8rem;

  text-align: center;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.gray4};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-top: auto;
`;
