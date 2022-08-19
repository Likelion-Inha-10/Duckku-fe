import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Margin from "../../duckku-ui/Margin";
import Flex from "../../duckku-ui/Flex";
import PurchaseAlbum from "./components/PurchaseAlbum";
import Typography from "../../duckku-ui/Typography";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 주문 번호 wrap
const DateBox = styled.div`
  width: 100%;
  height: 40px;
  background: white;
  border-bottom-style: solid;
  border-bottom-color: rgba(114, 105, 105, 0.18);
  border-bottom-width: 1px;
`;

// 날짜 content
const DateContent = styled.div`
  display: flex;
  width: 100px;
  height: 27px;
  margin-left: 30px;
  margin-top: 6px;
  letter-spacing: 0.55px;
`;

// 주문상세 content
const DetailContent = styled.div`
  display: flex;
  width: 100px;
  height: 27px;
  margin-left: 150px;
  margin-top: 6px;
  letter-spacing: 0.55px;
`;

// 날짜 중앙 분리선
const DatePartition = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(114, 105, 105, 0.18);
`;

// map 함수 사용
const PurchaseListMap = (props) => {
  return props.Lists.map((albums) => (
    <PurchaseAlbum
      key={albums.Album}
      Img={albums.Img}
      Title={albums.Title}
      Option={albums.Option}
      Price={albums.Price}
      Count={albums.Count}
      Include={albums.Include}
    />
  ));
};

const PurchaseHistory = () => {
  const navigate = useNavigate();

  const notFound = () => {
    navigate("/not-found");
  };

  const Lists1 = [
    {
      Img: "http://www.akbobada.com/home/akbobada/archive/akbo/img/20210817091527.JPG",
      Title: "Queendom - Red Velvet (레드벨벳)",
      Option: "Queendom - The 6th Mini Album",
      Price: "₩21,000",
      Count: "1",
      Include: "미포함]",
    },
  ];

  const Lists2 = [
    {
      Img: "https://image.bugsm.co.kr/album/images/200/202696/20269635.jpg?version=20211222043218.0",
      Title: "HIT - 세븐틴",
      Option: "디지털 싱글 'HIT'",
      Price: "₩11,000",
      Count: "1",
      Include: "포함]",
    },
  ];

  const Lists3 = [
    {
      Img: "https://w.namu.la/s/db95e8529db90e3ad7c75b6d7ea8506b7a4a6f0d547810cc6ab1aa8c7f063f848a56c4f93636c7fa53e81f5fe00a3374df82f3d4b38372669e466cad41c3ea9f36b7e06acae147f61a6142966e950257077bc6fb91c925d6388f8f480b02e57975285a4da8bc60ea3ef930fb907a4f8b",
      Title: "라일락 - 아이유",
      Option: "IU 5th Album 'LILAC'",
      Price: "₩17,000",
      Count: "1",
      Include: "미포함]",
    },
  ];

  const Lists4 = [
    {
      Img: "https://image.bugsm.co.kr/album/images/350/40737/4073710.jpg",
      Title: "LOVE DIVE - IVE(아이브)",
      Option: "IVE THE 2nd SINGLE ALBUM <LOVE DIVE>",
      Price: "₩13,800",
      Count: "1",
      Include: "포함]",
    },
  ];

  const Lists5 = [
    {
      Img: "https://img5.yna.co.kr/etc/inner/KR/2021/04/27/AKR20210427019000005_01_i_P2.jpg",
      Title: "Butter - 방탄소년단",
      Option: "Butter",
      Price: "₩19,000",
      Count: "1",
      Include: "포함]",
    },
  ];

  const Lists6 = [
    {
      Img: "http://www.akbobada.com/home/akbobada/archive/akbo/img/202208031533045.jpg",
      Title: "Attention - NewJeans",
      Option: "NewJeans 1st EP 'New Jeans'",
      Price: "₩11,000",
      Count: "1",
      Include: "미포함]",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <Header back title="구매내역" />
          <Margin height="20" />
          <DatePartition />
          <DateBox>
            <Flex direction="row" onClick={notFound}>
              <DateContent>
                <Typography bold18>22.08.20</Typography>
              </DateContent>
              <DetailContent>
                <Typography thin18 color="darkGray">
                  주문상세 {">"}
                </Typography>
              </DetailContent>
            </Flex>
          </DateBox>
          <PurchaseListMap Lists={Lists1} />
          <DatePartition />
          <DateBox>
            <Flex direction="row" onClick={notFound}>
              <DateContent>
                <Typography bold18>22.08.19</Typography>
              </DateContent>
              <DetailContent>
                <Typography thin18 color="darkGray">
                  주문상세 {">"}
                </Typography>
              </DetailContent>
            </Flex>
          </DateBox>
          <PurchaseListMap Lists={Lists2} />
          <PurchaseListMap Lists={Lists3} />
          <DatePartition />
          <DateBox>
            <Flex direction="row" onClick={notFound}>
              <DateContent>
                <Typography bold18>22.07.16</Typography>
              </DateContent>
              <DetailContent>
                <Typography thin18 color="darkGray">
                  주문상세 {">"}
                </Typography>
              </DetailContent>
            </Flex>
          </DateBox>
          <PurchaseListMap Lists={Lists4} />
          <PurchaseListMap Lists={Lists5} />
          <PurchaseListMap Lists={Lists6} />
        </Layout>
      </motion.div>
    </>
  );
};

export default PurchaseHistory;
