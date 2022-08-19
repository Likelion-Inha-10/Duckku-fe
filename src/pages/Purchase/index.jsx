import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { PurchaseCard, PurchaseBtn } from "./components/PurchaseCard";
import SingList from "./components/SingList";
import { motion } from "framer-motion";

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: hidden;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 56px;
`;

const TrackWrapper = styled.div`
  width: 80%;
  height: auto;
`;

const ListsMap = (props) => {
  return props.Lists.map((v) => (
    <SingList
      key={v.SingName}
      Num={props.Lists.indexOf(v) + 1}
      SingName={v.SingName}
      SingTime={v.SingTime}
    />
  ));
};

const Purchase = () => {
  const Lists = [
    { SingName: "Fell My Rhythm", SingTime: "3:31" },
    { SingName: "Cheer up", SingTime: "5:31" },
    { SingName: "우아하게", SingTime: "3:41" },
    { SingName: "Nothing", SingTime: "4:31" },
    { SingName: "힘들어 죽겠다...", SingTime: "2:32" },
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
          <Header zIndex="10" back title="   앨범 구매하기" />
          <AllWrapper>
            <PurchaseCard
              Img="https://th.bing.com/th/id/R.5e9ac488f0fe4831728673c1ae26cdb1?rik=utuJcfkDCV%2bY0A&riu=http%3a%2f%2fimage.yes24.com%2fmomo%2fTopCate2520%2fMidCate005%2f251947388.jpg&ehk=2kmSkQWNOz%2b7c%2fRy7B7uuI6tZQmtzG42pUuSVkRK6N8%3d&risl=&pid=ImgRaw&r=0"
              SingName="The ReVe Festival ‘Day2’"
              SingerName="레드벨벳"
            />
            <Margin width="390" height="50" />

            <TrackWrapper>
              <Typography bold16>수록곡</Typography>

              <ListsMap Lists={Lists} />
            </TrackWrapper>
            <Margin width="300px" height="130" />
          </AllWrapper>
          <PurchaseBtn />
        </Layout>
      </motion.div>
    </>
  );
};

export default Purchase;
