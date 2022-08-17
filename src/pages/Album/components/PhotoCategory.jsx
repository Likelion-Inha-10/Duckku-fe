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

const PhotoCategory = ({ data }) => {
  return (
    <>
      <PhotoContainer>
        {data.map((d) => (
          <PhotoWrapper>
            <PhotoQr
              Photo="http://img.tf.co.kr/article/stars/2016/10/17/20169331476691408.jpg"
              SingerName="나연"
              RegistDay="2022.02.01"
            />
            <Margin height="12" />
          </PhotoWrapper>
        ))}
      </PhotoContainer>
    </>
  );
};

export default PhotoCategory;
