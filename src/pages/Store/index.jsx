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
import { motion } from "framer-motion";
import axios from "axios";

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
  const [recommendAlbum, setRecommendAlbum] = useState();
  const [recommendList, setRecommendList] = useState([]);
  const [suggestAlbum1, setSuggestAlbum1] = useState();
  const [suggestList1, setSuggestList1] = useState([]);
  const [suggestAlbum2, setSuggestAlbum2] = useState();
  const [suggestList2, setSuggestList2] = useState([]);
  const [allAlbum, setAllAlbum] = useState([]);

  const navigate = useNavigate();
  const onClickMore = () => {
    navigate(`/interested-artist-albums`);
  };

  const onClickLike = () => {
    navigate(`/wish`);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_API}/my_artist_list/show_album_list/${id}`)
      .then((response) => {
        console.log("성공");
        console.log(response.data);
        setRecommendList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("실패");
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_API}/get_all_albums`)
      .then((response) => {
        console.log("전체 앨범 성공");
        console.log(response.data);
        setAllAlbum(response.data);
      })
      .catch((error) => {
        console.log("실패");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
  }, [allAlbum]);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <Header back title="스토어" />
          <LikeButtonWrapper>
            <LikeButton onClick={() => onClickLike()}>
              <AiFillHeart size="28px" color={theme.colors.red} />
            </LikeButton>
          </LikeButtonWrapper>
          <Margin height="28" />
          <InputBox placeholder="검색어를 입력해 주세요" />
          {false === true ? (
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
              <AlbumWrapper>
                {/* <Album
                  imgLink={allAlbum[0].album_image}
                  albumTitle={allAlbum[0].name}
                  artist={allAlbum[0].artist_name}
                  year={allAlbum[0].created_at.substring(
                    0,
                    allAlbum[0].created_at.indexOf("-")
                  )}
                  isChecked={false}
                  link={"/purchase"}
                />
                <Album
                  imgLink={allAlbum[1].album_image}
                  albumTitle={allAlbum[1].name}
                  artist={allAlbum[1].artist_name}
                  year={allAlbum[1].created_at.substring(
                    0,
                    allAlbum[1].created_at.indexOf("-")
                  )}
                  isChecked={false}
                  link={"/purchase"}
                />
                <Album
                  imgLink={allAlbum[2].album_image}
                  albumTitle={allAlbum[2].name}
                  artist={allAlbum[2].artist_name}
                  year={allAlbum[2].created_at.substring(
                    0,
                    allAlbum[2].created_at.indexOf("-")
                  )}
                  isChecked={false}
                  link={"/purchase"}
                /> */}
              </AlbumWrapper>
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
      </motion.div>
    </>
  );
};

export default Store;
