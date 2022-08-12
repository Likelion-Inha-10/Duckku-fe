import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { PurchaseCard, PurchaseBtn } from "./components/PurchaseCard";
import SingList from "./components/SingList";

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
`;

// 트랙 부분
const TrackWrapper = styled.div`
  width: 80%;
  height: auto;
`;

const Purchase = () => {
  return (
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

          <SingList Num="1" SingName="Lonely" SingTime="3:21" />
          <SingList Num="2" SingName="Feel like Rooler" SingTime="3:21" />
          <SingList Num="3" SingName="Ohio" SingTime="3:21" />
          <SingList Num="4" SingName="위잉위잉" SingTime="3:21" />
          <SingList Num="5" SingName="Our place" SingTime="3:21" />
          <SingList Num="6" SingName="Cheer up" SingTime="3:21" />
        </TrackWrapper>
        <ButtonWrapper>
          <PurchaseBtn />
        </ButtonWrapper>
      </AllWrapper>
    </Layout>
  );
};

export default Purchase;
