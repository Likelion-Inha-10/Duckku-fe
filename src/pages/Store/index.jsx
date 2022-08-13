import styled from "styled-components";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import StoreInfo from "../../duckku-ui/StoreInfo";
import Album from "../Store/components/album";
import InputBox from "../ArtistSelect/components/inputBox";
import Footer from "../../duckku-ui/Footer";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";

const TitleWrapper = styled.div`
  width: 326px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  padding-left: 8px;
  padding-right: 8px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 38%;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 390px;
  padding-right: 14px;
  padding-left: 32px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const moveToPage = () => {};
const Store = () => {
  return (
    <Layout>
      <Header back title="스토어" />
      <Margin height="28" />
      <InputBox placeholder="검색어를 입력해 주세요" />
      <Margin height="40" />
      <TitleWrapper>
        <Title>
          <Typography bold24>
            나의 관심
            <br />
            아티스트의 앨범
          </Typography>
        </Title>
        <MoreButton onClick={moveToPage}>
          <Typography bold16 color="gray">
            더보기
          </Typography>
        </MoreButton>
      </TitleWrapper>
      <Margin height="24" />
      <ListWrapper>
        <StoreInfo></StoreInfo>
      </ListWrapper>
      <TitleWrapper>
        <Title>
          <Typography bold24>추천 앨범</Typography>
        </Title>
      </TitleWrapper>
      <Margin height="24" />
      <AlbumWrapper>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
      </AlbumWrapper>
      <TitleWrapper>
        <Title>
          <Typography bold24>최신 앨범</Typography>
        </Title>
      </TitleWrapper>
      <Margin height="24" />
      <AlbumWrapper>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
      </AlbumWrapper>
      <Footer></Footer>
    </Layout>
  );
};

export default Store;
