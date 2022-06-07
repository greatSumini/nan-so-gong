import styled from "styled-components";

import { Layout, Button } from "@/components/common";

export default function RecoveryCompletePage() {
  return (
    <Layout>
      <OctoImg src="/images/octo/welcome_back.png" />
      <Title>
        축하합니다!
        <br />
        지갑 복구가 완료되었습니다
      </Title>
      <Tip>난쏘마스크와 함께 암호화폐 세상을 마음껏 즐겨보세용</Tip>
      <Button href="/" width={288} style={{ marginTop: "auto" }}>
        모두 완료
      </Button>
    </Layout>
  );
}

const OctoImg = styled.img`
  position: absolute;
  top: -15rem;

  width: 55.4rem;
`;

const Title = styled.h1`
  margin-top: 18rem;
  margin-bottom: 2.4rem;

  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

const Tip = styled.p`
  margin-bottom: 1.2rem;

  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray4};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-top: auto;
`;
