import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import { IoChevronDownOutline } from "react-icons/io5";
import theme from "../../../assets/theme";
import Margin from "../../../duckku-ui/Margin";
import AlbumCategory from "./AlbumCategory";
import PhotoCategory from "./PhotoCategory";

const Title = styled(Flex)`
  width: 326px;
  justify-content: space-between;
`;

const Type = styled(Flex)`
  width: 60px;
  align-items: center;
`;

const Contents = ({ categories, clickCategory }) => {
  const [selectCategory, setSelectCategory] = useState(categories[0]);
  const [data, setData] = useState({
    numbers: 3,
    type: "앨범",
    list: "등록순",
  });

  return (
    <div>
      <Title>
        <Typography>
          총 {data.numbers}개의 {data.type}
        </Typography>
        <Type style={{ cursor: "pointer" }}>
          <Typography color="gray">{data.list} </Typography>
          <IoChevronDownOutline size="16" color={theme.colors.gray} />
        </Type>
      </Title>

      <Margin height="30" />

      <AlbumCategory />
      <PhotoCategory />
    </div>
  );
};

export default Contents;
