import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import { IoChevronDownOutline } from "react-icons/io5";
import theme from "../../../assets/theme";
import Margin from "../../../duckku-ui/Margin";
import AlbumCategory from "./AlbumCategory";
import PhotoCategory from "./PhotoCategory";
import Album from "..";
import TicketCategory from "./TicketCategory";
import axios from "axios";

const Title = styled(Flex)`
  width: 326px;
  justify-content: space-between;
`;

const Type = styled(Flex)`
  width: 60px;
  align-items: center;
`;

const Contents = ({ data, categories, clickCategory }) => {
  return (
    <>
      <Title>
        <Typography>
          총 {data.length}개의 {clickCategory}
        </Typography>

        <Type style={{ cursor: "pointer" }}>
          <Typography color="gray">ㅗ</Typography>
          <IoChevronDownOutline size="16" color={theme.colors.gray} />
        </Type>
      </Title>

      <Margin height="30" />
      {clickCategory === "앨범" && <AlbumCategory data={data} />}
      {clickCategory === "포토카드" && <PhotoCategory data={data} />}
      {clickCategory === "응모권" && <TicketCategory data={data} />}
    </>
  );
};

export default Contents;
