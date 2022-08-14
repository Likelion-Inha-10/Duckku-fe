import React from 'react';
import styled from 'styled-components';
import Layout from '../../duckku-ui/Layout';
import Header from '../../duckku-ui/Header';
import Margin from '../../duckku-ui/Margin';
import Flex from '../../duckku-ui/Flex';
import PurchaseAlbum from './components/PurchaseAlbum';

// 구매한 상품 박스
const PurchaseBox = styled.div`
  width: 100%;
  height: 32px;
  background: rgba(114, 105, 105, 0.1);
`;

// 구매한 상품  글 작성 div
const PurchaseContent = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #726969;
`;

// 주문 번호 wrap
const DateBox = styled.div`
  width: 100%;
  height: 68px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`;

// 날짜 content
const DateContent = styled.div`
  display: flex;
  width: 72px;
  height: 17px;
  margin-left: 30px;
  margin-top: 17px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

// 시간 content
const TimeContent = styled.div`
  display: flex;
  width: 34px;
  height: 17px;
  margin-left: 40px;
  margin-top: 17px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

// 주문번호 content
const OrderNumber = styled.div`
  display: flex;
  width: 210px;
  height: 17px;
  margin-left: 30px;
  margin-top: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #726969;
`;

// 중앙 분리선
const Partition = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(114, 105, 105, 0.1);
`;



const PurchaseHistory = () => {
  return (
    <Layout>
      <Header back title="구매내역" />
      <Margin height="20" />
      <PurchaseBox>
        <PurchaseContent>구매한 상품</PurchaseContent>
      </PurchaseBox>
      <DateBox>
        <Flex direction="row">
          <DateContent>2022.08.09</DateContent>
          <TimeContent>15:08</TimeContent>
        </Flex>
        <OrderNumber>주문번호  162481674815648431314</OrderNumber>
      </DateBox>
      <Partition />
      <PurchaseAlbum />
      <DateBox>
        <Flex direction="row">
          <DateContent>2022.08.09</DateContent>
          <TimeContent>15:08</TimeContent>
        </Flex>
        <OrderNumber>주문번호  162481674815648431314</OrderNumber>
      </DateBox>
      <Partition />
      <PurchaseAlbum />
      <DateBox>
        <Flex direction="row">
          <DateContent>2022.08.09</DateContent>
          <TimeContent>15:08</TimeContent>
        </Flex>
        <OrderNumber>주문번호  162481674815648431314</OrderNumber>
      </DateBox>
      <Partition />
      <PurchaseAlbum />
    </Layout>
  );
};

export default PurchaseHistory;