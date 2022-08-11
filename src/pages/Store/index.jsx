import styled from "styled-components";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import StoreInfo from "../../duckku-ui/StoreInfo";
import Album from "../Store/components/album";
import InputBox from "../ArtistSelect/components/inputBox";
import Footer from "../../duckku-ui/Footer";
import Margin from "../../duckku-ui/Margin";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 300px;
  display: flex;
  font-size: 20px;
  margin-top: 42px;
  margin-bottom: 42px;
  align-items: flex-end;
`;

const Title = styled.div`
  text-align: left;
  font-weight: bolder;
  font-size: 24px;
  width: 250px;
  display: flex;
`;

const More = styled.div`
  text-align: right;
  color: #979797;
  font-size: 16px;
  font-weight: bold;
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
      <Container></Container>
      <Header back title="스토어" />
      <Margin height="32" />
      <Wrapper>
        <InputBox placeholder="검색어를 입력해 주세요" />
      </Wrapper>
      <TitleWrapper>
        <Title>
          나의 관심 <br /> 아티스트의 앨범
        </Title>
        <More onClick={moveToPage}>더보기</More>
      </TitleWrapper>
      <ListWrapper>
        <StoreInfo></StoreInfo>
      </ListWrapper>
      <TitleWrapper>
        <Title>추천 앨범</Title>
        <More onClick={moveToPage}>더보기</More>
      </TitleWrapper>
      <AlbumWrapper>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
        <Album></Album>
      </AlbumWrapper>
      <TitleWrapper>
        <Title>최신 앨범</Title>
        <More onClick={moveToPage}>더보기</More>
      </TitleWrapper>
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
