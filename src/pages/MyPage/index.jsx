import React from 'react';
import styled from 'styled-components';
import Layout from '../../duckku-ui/Layout';
import Header from '../../duckku-ui/Header';
import Footer from '../../duckku-ui/Footer';
import Margin from '../../duckku-ui/Margin';
import Flex from '../../duckku-ui/Flex';
import Typography from '../../duckku-ui/Typography';
import {BiHeartCircle} from 'react-icons/bi';
import {BsGrid} from 'react-icons/bs';
import {FiLayers} from 'react-icons/fi';
import {BsCreditCard} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// 마이페이지 개인 정보 박스
const PersonalBox = styled.div`
  width: 330px;
`;

// 내 정보 박스
const InformBox = styled.div`
  width: 64px;
  height: 28px;
  border: 0.911215px solid rgba(114, 105, 105, 0.5);
  border-radius: 4.55607px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(114, 105, 105, 0.5);
  padding: 7px 0;
`;

//e-mail 박스
const EmailBox = styled.div`
  width: 330px;
`;

//e-mail 내용
const EmailContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(114, 105, 105, 0.5);
`;

// 마이페이지 목록 div
const ListBox = styled.div`
  width: 330px;
  border-bottom: 0.911215px solid rgba(0, 0, 0, 0.18);

  .icons {
    padding-top: 15px;
  }
`;

// 마이페이지 목록 div
const ListBox2 = styled.div`
  width: 330px;

  .icons {
    padding-top: 15px;
  }
`;

// 마이페이지 목록 content
const ListContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  padding-top: 18px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

// 중앙 분리선
const Partition = styled.div`
  width: 100%;
  height: 7px;
  background: rgba(114, 105, 105, 0.18);
`;


const MyPage = () => {

  const navigate = useNavigate();

  const goToInform = () => {
    navigate("/my-inform");
  }
  
  return (
    <Layout>
      <Header title="마이 페이지"/>
      <Margin height="16" />
      <PersonalBox>
        <Flex direction="row" justify="space-between">
          <Typography bold21>김멋사</Typography>
          <InformBox onClick={goToInform}>내 정보</InformBox>
        </Flex>
      </PersonalBox>
      <Margin height="6" />
      <EmailBox>
        <Flex direction="row" justify="left">
          <EmailContent>likelion123@gmail.com</EmailContent>
        </Flex>
      </EmailBox>
      <Margin height="6" />
      <ListBox>
        <Flex direction="row" justify="left">
          <BiHeartCircle className="icons" size="38"/>
          <ListContent>내 아티스트 관리</ListContent>
        </Flex>
      </ListBox>
      <Margin height="7" />
      <ListBox2>
        <Flex direction="row" justify="left">
          <BsGrid className="icons" size="38"/>
          <ListContent>내 뱃지 관리</ListContent>
        </Flex>
      </ListBox2>
      <Partition />
      <Margin height="7" />
      <ListBox>
        <Flex direction="row" justify="left">
          <FiLayers className="icons" size="38"/>
          <ListContent>구매내역</ListContent>
        </Flex>
      </ListBox>
      <ListBox>
        <Flex direction="row" justify="left">
          <BsCreditCard className="icons" size="38"/>
          <ListContent>결제수단 관리</ListContent>
        </Flex>
      </ListBox>
      <Footer active="my"/>
    </Layout>
  );
};

export default MyPage;