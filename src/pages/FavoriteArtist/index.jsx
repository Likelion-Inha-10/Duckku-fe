import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Typography from "../../duckku-ui/Typography";
import Margin from "../../duckku-ui/Margin";
import ArtistCard from "./components/artistCard";

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 56px;
  z-index: 10;
`;

const TopWrapper = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const AddArtistButton = styled.div`
  width: fit-content;
  background: none;
  border: none;
  font-family: "Pretendard-Bold";
  font-size: 16px;
  font-weight: 700;
  color: #979797;
`;

const ArtistCardWrapper = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FavoriteArtist = () => {
  return (
    <Layout>
      <Header back title="나의 관심 아티스트" zIndex="20" />
      <Margin height="56" />
      <TopWrapper>
        <Typography bold24 color="headerText">
          총 4명의 아티스트
        </Typography>
        <AddArtistButton>+ 추가하기</AddArtistButton>
      </TopWrapper>
      <Margin height="16" />
      <ArtistCardWrapper>
        <ArtistCard
          id="1"
          artistName="레드벨벳"
          date="2022.01.24"
          imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
        />
      </ArtistCardWrapper>
      <ButtonWrapper>
        <Button width="350" height="68">
          <Typography bold24 color="white">
            완료
          </Typography>
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default FavoriteArtist;
