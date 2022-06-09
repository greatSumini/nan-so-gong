import styled from "styled-components";

type TabProps<Value> = {
  value: Value;
  onChange: (value: Value) => void;
  items: { label: string; value: Value }[];
};

export function Tab<Value extends string>({
  value,
  onChange,
  items,
}: TabProps<Value>) {
  return (
    <Wrapper>
      {items.map((item) => (
        <TabItem
          key={item.value}
          selected={value === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </TabItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 4.4rem;
  padding: 0;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray7};
`;

const TabItem = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  border-bottom: 0.2rem solid
    ${({ selected, theme }) =>
      selected ? theme.colors.gray3 : theme.colors.gray7};

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.gray3 : theme.colors.gray5};

  cursor: pointer;

  transition: all 0.3s;
  &: hover {
    background-color: ${({ theme }) => theme.colors.gray8};
  }
`;
