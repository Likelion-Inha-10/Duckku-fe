import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import Margin from "../../../duckku-ui/Margin";
import ImageCard from "../../../duckku-ui/ImageCard";
import album from "../../../assets/images/redvelvet.png";
import PhotoQr from "../../ModalQrTest/PhotoQr";
import Img from "../../../assets/images/redvelvet.png";
const PhotoWrapper = styled(Flex)`
  flex-direction: column;
  width: 154px;
  height: 250px;
  align-items: flex-start;
`;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 19px;
  cursor: pointer;
`;

const PhotoCategory = ({ data, photo }) => {
  return (
    <>
      <PhotoContainer>
        {photo.map((d) => (
          <PhotoWrapper>
            <PhotoQr
              SingerName={d.name}
              Photo={d.img}
              RegistDay={d.register_at}
            />
            <Margin height="12" />
          </PhotoWrapper>
        ))}
      </PhotoContainer>
    </>
  );
};

export default PhotoCategory;
