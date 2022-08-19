import styled from "styled-components";
import Footer from "../../duckku-ui/Footer";
import Layout from "../../duckku-ui/Layout";
import Flex from "../../duckku-ui/Flex";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import CardCarousel from "./components/cardCarousel";
import { HiOutlineChevronDown } from "react-icons/hi";
import FirstAlbum from "./components/firstAlbum";
import NthAlbum from "./components/nthAlbum";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// 관심 아티스트와 앨범차트를 따로 감싸기 위한 component
const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

// 상단 Title을 감쌀 component
const TitleBox = styled.div`
  width: 100%;
  padding-left: 40px;
  font-family: "Pretendard-Bold";
`;

// 수정하기 버튼을 감싸는 component (위치 조정용)
const EditButtonWrapper = styled.div`
  width: 326px;
  display: flex;
  align-items: right;
  justify-content: right;
`;

// 관심 아티스트 수정하기 버튼 component
const EditButton = styled.button`
  width: fit-content;
  background: none;
  border: none;
  font-family: "Pretendard-Bold";
  font-size: 16px;
  font-weight: 700;
  color: #979797;
  margin-right: 8px;
  margin-top: -60px;
  z-index: 10;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

// 앨범차트 더보기 버튼 component
const MoreViewButton = styled.button`
  width: 98px;
  height: 48px;
  border: none;
  background: #f8f8fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

// 앨범 더보기 버튼 내부 Wrapper component
const MoreViewTextWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3px;
`;

const MainHome = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const onClickEdit = () => {
    navigate(`/favorite-artist`);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/userinfo/${id}`)
      .then((response) => {
        setUserName(response.data[0].userName);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <PageWrapper>
            <Margin height="40" />
            <TitleBox>
              <Flex direction="column" justify="left">
                <Typography fontSize="28" fontWeight="700">
                  {userName} 님의
                  <br />
                  관심 아티스트
                </Typography>
              </Flex>
            </TitleBox>
            <Margin height="40" />
            <CardCarousel />
            <EditButtonWrapper>
              <EditButton onClick={() => onClickEdit()}>+ 수정하기</EditButton>
            </EditButtonWrapper>
          </PageWrapper>
          <PageWrapper>
            <Margin height="44" />
            <TitleBox>
              <Flex direction="column" justify="left">
                <Typography fontSize="28" fontWeight="700">
                  앨범차트
                </Typography>
              </Flex>
            </TitleBox>
            <Margin height="24" />
            <FirstAlbum
              albumLink="https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/639/088/82639088_1653623843808_1_600x600.JPG/dims/resize/Q_80,0"
              iconLink="http://file2.instiz.net/data/cached_img/upload/201507210/88367d0af857e0a6cd53aafbe1c15c49.jpg"
              albumName="Face The Sun"
              artistName="Seventeen"
              albumInfo="정규 4집"
            />
            <Margin height="16" />
            <NthAlbum
              rank="2"
              iconLink="http://file2.instiz.net/data/cached_img/upload/201507210/88367d0af857e0a6cd53aafbe1c15c49.jpg"
              albumName="Face The Sun"
              artistName="Seventeen"
              albumInfo="정규 4집"
            />
            <Margin height="16" />
            <NthAlbum
              rank="3"
              iconLink="https://file2.instiz.net/data/cached_img/upload/201507210/88367d0af857e0a6cd53aafbe1c15c49.jpg"
              albumName="Face The Sun"
              artistName="Seventeen"
              albumInfo="정규 4집"
            />
            <Margin height="16" />
            <MoreViewButton>
              <MoreViewTextWrapper>
                <Typography regular16 color="gray">
                  더보기
                </Typography>
                <HiOutlineChevronDown size="22" color="#afafaf" />
              </MoreViewTextWrapper>
            </MoreViewButton>
          </PageWrapper>
          <Margin height="70" />
          <Footer active="home" />
        </Layout>
      </motion.div>
    </>
  );
};

export default MainHome;
