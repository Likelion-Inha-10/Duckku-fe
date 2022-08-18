import React from 'react';
import styled from 'styled-components';
import Layout from '../../duckku-ui/Layout';
import Header from '../../duckku-ui/Header';
import Margin from '../../duckku-ui/Margin';
import Flex from '../../duckku-ui/Flex';
import PurchaseAlbum from './components/PurchaseAlbum';
import Typography from '../../duckku-ui/Typography';

// 구매한 상품 박스
const PurchaseBox = styled.div`
  width: 100%;
  height: 32px;
  background: rgba(114, 105, 105, 0.1);
`;

// 구매한 상품  글 작성 div

// 구매한 상품  작성 div
const PurchaseContent = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #726969;
`;

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




const PurchaseHistory = () => {
  return (
    <Layout>
      <Header back title="구매내역" />
      <Margin height="20" />
      <DatePartition />
      <DateBox>
        <Flex direction="row">
          <DateContent>
            <Typography bold18 >22.07.17</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">주문상세  {'>'}</Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseAlbum />
      <DatePartition />
      <DateBox>
        <Flex direction="row">
          <DateContent>
            <Typography bold18 >22.06.11</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">주문상세  {'>'}</Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseAlbum />
      <PurchaseAlbum />
      <DatePartition />
      <DateBox>
        <Flex direction="row">
          <DateContent>
            <Typography bold18 >22.06.04</Typography>
          </DateContent>
          <DetailContent>
            <Typography thin18 color="darkGray">주문상세  {'>'}</Typography>
          </DetailContent>
        </Flex>
      </DateBox>
      <PurchaseAlbum />
      <PurchaseAlbum />
      <PurchaseAlbum />
    </Layout>
  );
};

export default PurchaseHistory;
