import styled from "styled-components";
import loveImg from "../../assets/images/love.jpeg";
import { HiOutlineCheckCircle } from "react-icons/hi";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding-left: 32px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 18px;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 154px;
  height: 220px;
  overflow: hidden;
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

const IconBox = styled.div`
  width: 154px;
  height: 32px;
  padding-top: 8px;
  padding-right: 8px;
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: 90%;
  object-fit: cover;
`;

const moveToPage = () => {};
const StoreInfo = () => {
  return (
    <Container>
      <svg width="0" height="0">
        <linearGradient id="purple" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7001FF" offset="0" />
          <stop stopColor="#C15CFF" offset="50" />
        </linearGradient>
      </svg>

      <Box>
        <IconBox>
          <Circle>
            <HiOutlineCheckCircle
              size="32px"
              opacity="100%"
              style={{ stroke: "url(#purple)" }}
            />
          </Circle>
        </IconBox>

        <ImageContainer>
          <ImageBox src={loveImg} onClick={moveToPage} />
        </ImageContainer>
        <Info>
          <AlbumTitle>사랑으로</AlbumTitle>
          <Detail> 혁오 2022</Detail>
        </Info>
      </Box>
      <Box>
        <ImageContainer>
          <ImageBox src={loveImg} onClick={moveToPage} />
        </ImageContainer>

        <Info>
          <AlbumTitle>사랑으로</AlbumTitle>
          <Detail> 혁오 2022</Detail>
        </Info>
      </Box>
      <Box>
        <ImageContainer>
          <ImageBox src={loveImg} onClick={moveToPage} />
        </ImageContainer>

        <Info>
          <AlbumTitle>사랑으로</AlbumTitle>
          <Detail> 혁오 2022</Detail>
        </Info>
      </Box>

      <Box>
        <ImageContainer>
          <ImageBox src={loveImg} onClick={moveToPage} />
        </ImageContainer>
        <Info>
          <AlbumTitle>사랑으로</AlbumTitle>
          <Detail> 혁오 2022</Detail>
        </Info>
      </Box>
    </Container>
  );
};

export default StoreInfo;
