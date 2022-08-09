import styled from "styled-components";
import loveImg from "../../assets/images/love.jpeg";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: left;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 30px;
`;

const ImageContainer = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 20px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const Info = styled.div`
  width: 130px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const AlbumTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  color: #444444;
`;

const Detail = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: #444444;
`;

const moveToPage = () => {};
const Album = () => {
  return (
    <Container>
      <Box margin="10">
        <ImageContainer>
          <ImageBox src={loveImg} onClick={moveToPage} />
        </ImageContainer>
        <Info>
          <AlbumTitle>사랑으로</AlbumTitle>
        </Info>
        <Info>
          <Detail> 혁오 2022</Detail>
        </Info>
      </Box>
    </Container>
  );
};

export default Album;
