import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import WishCard from "./components/WishCard";
import { motion } from "framer-motion";

const AllWishWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding-left: 25px;
`;

const AlbumListsMap = (props) => {
  return props.Lists.map((v) => (
    <WishCard
      key={v.Singer}
      Img={v.Img}
      SingTitle={v.SingTitle}
      Singer={v.Singer}
      SingYear={v.SingYear}
    />
  ));
};

const Wish = () => {
  const Lists = [
    {
      Img: "https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg",
      SingTitle: "More and More",
      Singer: "트와이스",
      SingYear: "2022",
    },
    {
      Img: "https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg",
      SingTitle: "More and More",
      Singer: "트와이스",
      SingYear: "2022",
    },
    {
      Img: "https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg",
      SingTitle: "More and More",
      Singer: "트와이스",
      SingYear: "2022",
    },
    {
      Img: "https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg",
      SingTitle: "More and More",
      Singer: "트와이스",
      SingYear: "2022",
    },
    {
      Img: "https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg",
      SingTitle: "More and More",
      Singer: "트와이스",
      SingYear: "2022",
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
          <AllWishWrapper>
            <Header back title=" 찜한 앨범" />
            <Margin height="80" />
            <AlbumListsMap Lists={Lists} />
          </AllWishWrapper>
        </Layout>
      </motion.div>
    </>
  );
};

export default Wish;
