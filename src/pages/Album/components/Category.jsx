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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${(props) =>
    props.none &&
    `
      background: #f5f5f5;
      color: ${props.theme.colors.gray};
    `}
`;

const Category = ({ categories, clickCategory, setClickCategory }) => {
  return (
    <Categories>
      <Margin width="22" />
      {categories.map((category) =>
        category === clickCategory ? (
          <Button key={category} onClick={() => setClickCategory(category)}>
            {category}
          </Button>
        ) : (
          <Button
            key={category}
            none
            onClick={() => setClickCategory(category)}
          >
            {category}
          </Button>
        )
      )}
    </Categories>
  );
};

export default Category;
