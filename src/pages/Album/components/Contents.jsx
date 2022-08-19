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
import SortMenu from "../../../duckku-ui/SortMenu";

const Title = styled(Flex)`
  width: 315px;
  justify-content: space-between;
`;

const Type = styled(Flex)`
  align-items: center;
`;

const Contents = ({
  data,
  photo,
  albums,
  ticket,
  categories,
  clickCategory,
}) => {
  return (
    <>
      <Title>
        {clickCategory === "앨범" && (
          <Typography bold16>
            총 {albums.length}개의 {clickCategory}
          </Typography>
        )}
        {clickCategory === "포토카드" && (
          <Typography bold16>
            총 {photo.length}개의 {clickCategory}
          </Typography>
        )}
        {clickCategory === "응모권" && (
          <Typography bold16>
            총 {ticket}개의 {clickCategory}
          </Typography>
        )}

        <Type style={{ cursor: "pointer" }}></Type>
      </Title>

      <Margin height="30" />
      {clickCategory === "앨범" && (
        <AlbumCategory albums={albums} data={data} />
      )}
      {clickCategory === "포토카드" && (
        <PhotoCategory photo={photo} data={data} />
      )}
      {clickCategory === "응모권" && (
        <TicketCategory ticket={ticket} data={data} />
      )}
    </>
  );
};

export default Contents;
