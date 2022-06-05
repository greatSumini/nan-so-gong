import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.red};
`;

export default function HomePage() {
  return (
    <div>
      <Title>Hello 난소공!</Title>
    </div>
  );
}
