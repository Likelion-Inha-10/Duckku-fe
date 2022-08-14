import styled from "styled-components";
import loveImg from "../../assets/images/love.jpeg";
import { HiOutlineCheck } from "react-icons/hi";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding-left: 32px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
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

const HeartSection = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 275px;
  margin-top: 8px;
  background-color: white;
  opacity: 90%;
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #7001ff 6.14%, #c15cff 94.68%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: ${(props) => props.color || "gray"};
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
          <HeartSection>
            <HiOutlineCheck
              size="32px"
              opacity="100%"
              style={{ stroke: "url(#purple)" }}
            />
          </HeartSection>
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
