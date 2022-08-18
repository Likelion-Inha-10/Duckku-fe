import React from "react";
import styled from "styled-components";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Margin from "../../duckku-ui/Margin";
import Flex from "../../duckku-ui/Flex";
import PurchaseAlbum from "./components/PurchaseAlbum";
import Typography from "../../duckku-ui/Typography";
import { useNavigate } from "react-router-dom";

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
  return props.Lists.map((v) => (
    <PurchaseAlbum
      key={v.Aibum}
      Img={v.Img}
      Title={v.Title}
      Option={v.Option}
      Price={v.Price}
      Count={v.Count}
    />
  ));
};

const PurchaseHistory = () => {
  const navigate = useNavigate();

  const notFound = () => {
    navigate("/not-found");
  };

  const Lists = [
    {
      Img: "http://www.akbobada.com/home/akbobada/archive/akbo/img/202208031533045.jpg",
      Title: "Attention - NewJeans",
      Option: "NewJeans 1st EP 'New Jeans",
      Price: "₩11,000",
      Count: "1",
    },
  ]
  return (
    <Layout>
      <Header back title="구매내역" />
      <Margin height="20" />
      <DatePartition />
      <DateBox>
        <Flex direction="row" onClick={notFound}>
          <DateContent>
            <Typography bold18>22.07.17</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">
              주문상세 {">"}
            </Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseListMap Lists={Lists} />
      <DatePartition />
      <DateBox>
        <Flex direction="row" onClick={notFound}>
          <DateContent>
            <Typography bold18>22.06.11</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">
              주문상세 {">"}
            </Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseListMap Lists={Lists} />
      <PurchaseListMap Lists={Lists} />
      <DatePartition />
      <DateBox>
        <Flex direction="row" onClick={notFound}>
          <DateContent>
            <Typography bold18>22.06.04</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">
              주문상세 {">"}
            </Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseListMap Lists={Lists} />
      <PurchaseListMap Lists={Lists} />
      <PurchaseListMap Lists={Lists} />
    </Layout>
  );
};

export default PurchaseHistory;

