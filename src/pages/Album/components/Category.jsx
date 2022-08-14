import React from "react";
import styled from "styled-components";
import Flex from "../../../duckku-ui/Flex";
import Margin from "../../../duckku-ui/Margin";
const Categories = styled(Flex)`
  gap: 8px;
  width: 100%;
  justify-content: flex-start;
`;
const Button = styled.button`
  padding: 10px 12px;
  border-radius: 16px;
  border: none;
  background: ${(props) => props.theme.colors.main};
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.none &&
    `
      background: #f5f5f5;
      color: ${props.theme.colors.gray};
    `}
`;

const Category = () => {
  return (
    <Categories>
      <Margin width="22" />
      <Button>앨범</Button>
      <Button none>포토카드</Button>
      <Button none>응모권</Button>
    </Categories>
  );
};

export default Category;
