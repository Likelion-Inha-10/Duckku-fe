import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import Margin from "../../../duckku-ui/Margin";
import ImageCard from "../../../duckku-ui/ImageCard";
import album from "../../../assets/images/redvelvet.png";

const PhotoWrapper = styled(Flex)`
  flex-direction: column;
  width: 154px;
  height: 275px;
  align-items: flex-start;
`;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 19px;
  cursor: pointer;
`;

const PhotoCategory = () => {
  const [data, setData] = useState({
    date: "2022.02.01",
  });
  return (
    <>
      <PhotoContainer>
        <PhotoWrapper>
          <ImageCard src={album} />
          <Margin height="12" />
          <Typography style={{ paddingLeft: "8px" }} regular14 color="gray">
            {data.date}
          </Typography>
        </PhotoWrapper>
        <PhotoWrapper>
          <ImageCard src={album} />
          <Margin height="12" />
          <Typography style={{ paddingLeft: "8px" }} regular14 color="gray">
            {data.date}
          </Typography>
        </PhotoWrapper>
        <PhotoWrapper>
          <ImageCard src={album} />
          <Margin height="12" />
          <Typography style={{ paddingLeft: "8px" }} regular14 color="gray">
            {data.date}
          </Typography>
        </PhotoWrapper>
      </PhotoContainer>
    </>
  );
};

export default PhotoCategory;
