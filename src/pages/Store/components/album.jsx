import styled from "styled-components";
import loveImg from "../../../assets/images/love.jpeg";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 24px;
  padding-right: 18px;
`;

const ImageContainer = styled.div`
  width: 154px;
  height: 220px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100px;
  height: 40px;
  flex-wrap: wrap;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`;

const AlbumTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #444444;
`;

const Detail = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #444444;
`;

const moveToPage = () => {};
const Album = () => {
  return (
    <Box>
      <ImageContainer>
        <ImageBox src={loveImg} onClick={moveToPage} />
      </ImageContainer>
      <Info>
        <AlbumTitle>사랑으로</AlbumTitle>
        <Detail> 혁오 2022</Detail>
      </Info>
    </Box>
  );
};

export default Album;