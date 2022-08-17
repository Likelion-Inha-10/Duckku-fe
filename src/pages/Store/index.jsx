import styled from "styled-components";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Album from "../../duckku-ui/Album";
import InputBox from "../ArtistSelect/components/inputBox";
import Footer from "../../duckku-ui/Footer";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import theme from "./../../assets/theme/index";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const FavoriteListWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const FavoriteListContainer = styled.div`
  width: fit-content;
  margin-left: 23px;
  margin-right: 23px;
  display: flex;
  flex-direction: row;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 344px;
`;

const LikeButtonWrapper = styled.div`
  width: 390px;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 44px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Store = () => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [recommendAlbum, setRecommendAlbum] = useState();
  const [recommendList, setRecommendList] = useState([
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: true,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: true,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
  ]);

  const navigate = useNavigate();
  const onClickMore = () => {
    navigate(`/interested-artist-albums`);
  };

  useEffect(() => {
    setRecommendAlbum(
      recommendList.map((album) => (
        <Album
          imgLink={album.imgLink}
          albumTitle={album.albumTitle}
          artist={album.artist}
          year={album.year}
          isChecked={album.isChecked}
          link={"/purchase"}
        />
      ))
    );
  }, [recommendList]);

  return (
    <Layout>
      <Header back title="스토어" />
      <LikeButtonWrapper>
        <LikeButton onClick={() => setIsLikeClicked(!isLikeClicked)}>
          {isLikeClicked === false ? (
            <AiOutlineHeart size="28px" color="#AFAFAF" />
          ) : (
            <AiFillHeart size="28px" color={theme.colors.red} />
          )}
        </LikeButton>
      </LikeButtonWrapper>
      <Margin height="28" />
      <InputBox placeholder="검색어를 입력해 주세요" />
      {isLikeClicked === true ? (
        <>
          <Margin height="250" />
          <Typography regular16 color="gray">
            해당하는 앨범이 없습니다
          </Typography>
        </>
      ) : (
        <>
          <Margin height="40" />
          <TitleWrapper>
            <Title>
              <Typography bold24>
                나의 관심
                <br />
                아티스트의 앨범
              </Typography>
            </Title>
            <MoreButton onClick={() => onClickMore()}>
              <Typography bold16 color="gray">
                더보기
              </Typography>
            </MoreButton>
          </TitleWrapper>
          <Margin height="24" />
          <FavoriteListWrapper>
            <FavoriteListContainer>{recommendAlbum}</FavoriteListContainer>
          </FavoriteListWrapper>
          <Margin height="24" />
          <TitleWrapper>
            <Title>
              <Typography bold24>추천 앨범</Typography>
            </Title>
          </TitleWrapper>
          <Margin height="24" />
          <AlbumWrapper>{recommendAlbum}</AlbumWrapper>
          <Margin height="24" />
          <TitleWrapper>
            <Title>
              <Typography bold24>최신 앨범</Typography>
            </Title>
          </TitleWrapper>
          <Margin height="24" />
          <AlbumWrapper>{recommendAlbum}</AlbumWrapper>
          <Margin height="88" />
        </>
      )}
      <Footer active="store" />
    </Layout>
  );
};

export default Store;
