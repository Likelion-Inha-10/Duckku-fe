import styled from "styled-components";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import { VscSearch } from "react-icons/vsc";
import StoreInfo from "../../duckku-ui/StoreInfo";
import Album from "../../duckku-ui/Album";

const Wrapper = styled.div`
  width: 100vw;
  height: 12%;
  margin-bottom: 5%;
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

const Search = styled.div`
  width: 100%;
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
`;

const ListWrapper = styled.div`
  padding-left: 27px;
  padding-right: 10%;
  width: 100%;
  height: 38%;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 93%;
  margin-right: 3px;
`;

const moveToPage = () => {};
const Store = () => {
  return (
    <Layout>
      <Wrapper>
        <Header back title="스토어" />
        <Search>
          <VscSearch size="36" />
          <Input placeholder="검색어를 입력하세요"></Input>
        </Search>
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
      </AlbumWrapper>
      <AlbumWrapper>
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
      </AlbumWrapper>
      <AlbumWrapper>
        <Album></Album>
        <Album></Album>
      </AlbumWrapper>
    </Layout>
  );
};

export default Store;
