import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import theme from "../../../assets/theme";
import Margin from "../../../duckku-ui/Margin";
import ImageCard from "../../../duckku-ui/ImageCard";
import album from "../../../assets/images/redvelvet.png";
import { GrEmptyCircle } from "react-icons/gr";

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

const AlbumCategory = ({ data }) => {
  return (
    <>
      <AlbumContainer>
        {data.map((d) => (
          <AlbumWrapper>
            <ImageCard src={album} />
            <Margin height="12" />
            <Info>
              <Text>
                <Typography style={{ lineHeight: "1.3" }} regular16>
                  {d.username}
                </Typography>
                <Typography thin14>{d.address.suite}</Typography>
              </Text>
              <Song>
                <StyledIcon />
                <Typography style={{ paddingLeft: "3px" }} regular16>
                  {d.id}
                </Typography>
              </Song>
            </Info>
            <Margin height="18" />
          </AlbumWrapper>
        ))}
      </AlbumContainer>
    </>
  );
};

export default AlbumCategory;
