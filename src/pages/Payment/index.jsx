import React from 'react';
import styled from 'styled-components';
import Layout from '../../duckku-ui/Layout';
import Header from '../../duckku-ui/Header';
import Margin from '../../duckku-ui/Margin';
import Button from '../../duckku-ui/Button';

//카드 이미지
const Card = styled.img`
  display: flex;
  width: 300px;
  height: 420px;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

// 카드 내용 작성 랩
const CardWrap = styled.div`
  width: 100%;
  height: 24px;
`;

// 카드명 작성칸
const CardName = styled.div`
  display: flex;
  margin-left: 78px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;
// 카드 번호 작성칸
const CardNumber = styled.div`
  display: flex;
  margin-left: 78px;
  margin-top: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: rgba(114, 105, 105, 0.5);
`;

// 버튼 만들기
const ButtonWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  gap: 18px;
  margin-bottom: 112px;
`;

const Payment = () => {
  return (
    <Layout>
      <Header back title="결제수단 관리" />
      <Margin height="50" />
      <Card src={"/image/mastercard.png"} alt="LikelionCard" />
      <Margin height="20" />
      <CardWrap>
        <CardName>라이크라이언 마스터카드</CardName>
      </CardWrap>
      <CardWrap>
        <CardNumber>**** **** 1237 8607</CardNumber>
      </CardWrap>
      <Margin height="82" />
      <ButtonWrapper>
        <Button>+ 결제수단 등록</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Payment;