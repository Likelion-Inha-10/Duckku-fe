import React from "react";
import styled from "styled-components";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Margin from "../../duckku-ui/Margin";
import Flex from "../../duckku-ui/Flex";
import { BsFillCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// 개인 정보 박스
const PersonalBox = styled.div`
  width: 330px;
`;

//기본정보 content
const MyInformBox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  padding-top: 3px;
`;

// 정보수정 박스
const InformBox = styled.div`
  width: 74px;
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

// 두개의 div를 담는 큰 박스
const SetWrap = styled.div`
  width: 100%;
  height: 25px;
`;

// 타이틀을 가지는 div
const SetTitleBox = styled.div`
  width: 111px;
  height: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding-left: 30px;
  padding-top: 5px;
  word-break: keep-all;
`;

// 수정된 정보를 받는 div
const SetContentBox = styled.div`
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  padding-left: 52px;
  padding-top: 5px;

  .icon {
    padding-left: 2px;
  }
`;

// 중앙 분리선
const Partition = styled.div`
  width: 100%;
  height: 7px;
  background: rgba(114, 105, 105, 0.18);
`;

const MyInform = () => {
  const navigate = useNavigate();

  const goToFixInform = () => {
    navigate("/my-inform-fix");
  };

  return (
    <Layout>
      <Header back title="내 정보" />
      <Margin height="22" />
      <PersonalBox>
        <Flex direction="row" justify="space-between">
          <MyInformBox>기본정보</MyInformBox>
          <InformBox onClick={goToFixInform}>정보수정</InformBox>
        </Flex>
      </PersonalBox>
      <Margin height="20" />
      <SetWrap>
        <Flex direction="row">
          <SetTitleBox>이름</SetTitleBox>
          <SetContentBox>김멋사</SetContentBox>
        </Flex>
      </SetWrap>
      <Margin height="28" />
      <SetWrap>
        <Flex direction="row">
          <SetTitleBox>이메일</SetTitleBox>
          <SetContentBox>likelion123@gmail.com</SetContentBox>
        </Flex>
      </SetWrap>
      <Margin height="28" />
      <SetWrap>
        <Flex direction="row">
          <SetTitleBox>비밀번호</SetTitleBox>
          <SetContentBox>
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
            <BsFillCircleFill className="icon" size="13" />
          </SetContentBox>
        </Flex>
      </SetWrap>
      <Margin height="27" />
      <Partition />
    </Layout>
  );
};

export default MyInform;
