import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../duckku-ui/Footer";
import Layout from "../../duckku-ui/Layout";
import Flex from "../../duckku-ui/Flex";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";

const TitleBox = styled.div`
  width: 100%;
  padding-left: 32px;
  font-family: "Pretendard-Bold";
`;

const MainHome = () => {
  return (
    <Layout>
      <Margin height="84" />
      <TitleBox>
        <Flex direction="column" justify="left">
          <Typography fontSize="28" fontWeight="700">
            영우 님의
            <br />
            관심 아티스트
          </Typography>
        </Flex>
      </TitleBox>
      <Footer />
    </Layout>
  );
};

export default MainHome;
