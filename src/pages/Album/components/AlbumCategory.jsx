import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import theme from "../../../assets/theme";
import Margin from "../../../duckku-ui/Margin";
import ImageCard from "../../../duckku-ui/ImageCard";
import album from "../../../assets/images/redvelvet.png";
import { GrEmptyCircle } from "react-icons/gr";
import ListAlbum from "../../ModalAlbum/ListAlbum";

const Text = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 44px;
  max-width: 100px;
`;

const AlbumWrapper = styled(Flex)`
  flex-direction: column;
  width: 154px;
  height: 293px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Info = styled(Flex)`
  width: 138px;
  justify-content: space-between;
`;

const Song = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 18px;
  width: 27px;
`;

const StyledIcon = styled(GrEmptyCircle)`
  top: 5px;
  path {
    stroke-width: 2.5;
  }
`;
const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 19px;
`;

const AlbumCategory = ({ data, albums }) => {
  const Lists = [
    { SingName: "1. Fell My Rhythm", SingTime: "3:31" },
    { SingName: "2. Cheer up", SingTime: "5:31" },
    { SingName: "3. 우아하게", SingTime: "3:41" },
    { SingName: "4. Nothing", SingTime: "4:31" },
    { SingName: "5. Achoo", SingTime: "2:32" },
  ];

  return (
    <>
      <AlbumContainer>
        {albums.map((d) => (
          <>
            <AlbumWrapper>
              <ListAlbum
                Photo={d.album_image}
                AlbumName={d.name}
                AlbumNumber={d.album_id}
                MadeDate={d.created_at}
                Lists={Lists}
              />
              <Margin height="12" />
              <Info>
                <Text>
                  <Typography style={{ lineHeight: "1.3" }} regular16>
                    {d.name}
                  </Typography>
                  <Typography thin14>{d.album_type}</Typography>
                </Text>
                <Song>
                  <StyledIcon />
                  <Typography style={{ paddingLeft: "3px" }} regular16>
                    {d.album_id}
                  </Typography>
                </Song>
              </Info>
              <Margin height="18" />
            </AlbumWrapper>
          </>
        ))}
      </AlbumContainer>
    </>
  );
};

export default AlbumCategory;
