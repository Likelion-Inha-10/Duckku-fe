import styled from "styled-components";
import loveImg from "../../assets/images/love.jpeg";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: left;
  overflow: scroll;
`;

const Box = styled.div`
  width: 154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  margin-right: 18px;
`;

const ImageContainer = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
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
const StoreInfo = () => {
  return (
    <div>
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
        <Box>
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
        <Box>
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
    </div>
  );
};

export default StoreInfo;
