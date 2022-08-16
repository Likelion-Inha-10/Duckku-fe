import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from '../../duckku-ui/Layout';
import Header from '../../duckku-ui/Header';
import Margin from '../../duckku-ui/Margin';
import Button from '../../duckku-ui/Button';
import Flex from '../../duckku-ui/Flex';
import Toast from '../../duckku-ui/Toast';

//정보 수정 박스
const PersonalBox = styled.div`
  width: 330px;
`;

//정보 수정 content
const FixInformBox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  padding-top: 3px;
`;

// 버튼 만들기
const ButtonWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  gap: 18px;
  margin-bottom: 112px;
`;

//한 칸을 감싸는 큰 박스
const FixWrap = styled.div`
  width: 100%;
  height: 20px;
`;

// 타이틀을 가지는 div
const SetTitleBox = styled.div`
  width: 120px;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  padding-left: 30px;
  padding-top: 5px;
`;

// 수정된 정보를 받는 div
const FixContentBox = styled.div`
  height: 24px;
  width: 218px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-left: 18px;
  padding-top: 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.18);

  .name {
    border-top-width: 0;
    border-left-width: 0;
    border-bottom-width: 0;
    border-right-width: 0;
  }
`;

const MyFixInform = () => {
  // 이름 입력값 받기
  const [inputName, setInputName] = useState("");

  const onChangeInputName = (e) => {
    const {name} = e.target;
    setInputName(name);
  };
  // 이메일 입력값 받기
  const [inputEmail, setInputEmail] = useState("");

  const onChangeInputEmail = (e) => {
    const {email} = e.target;
    setInputEmail(email);
  };
  // 비밀번호 입력값 받기
  const [inputPassword, setInputPassword] = useState("");

  const onChangeInputPassword = (e) => {
    const {password} = e.target;
    setInputPassword(password);
  };
  // 비밀번호 확인 입력값 받기
  const [inputCheck, setInputCheck] = useState("");

  const onChangeInputCheck = (e) => {
    const {check} = e.target;
    setInputCheck(check);
  };

  return (
    <Layout>
      <Header back title="내 정보 수정"/>
      <Margin height="22" />
      <PersonalBox>
        <FixInformBox>정보수정</FixInformBox>
      </PersonalBox>
      <Margin height="20" />
      <FixWrap>
        <Flex direction="row">
          <SetTitleBox>이름</SetTitleBox>
          <FixContentBox>
            <input className="name" onChange={onChangeInputName} value={inputName} placeholder="김멋사"type="text"/>
          </FixContentBox>
        </Flex>
      </FixWrap>
      <Margin height="28" />
      <FixWrap>
        <Flex direction="row">
          <SetTitleBox>이메일</SetTitleBox>
          <FixContentBox>
          <input className="name" onChange={onChangeInputEmail} value={inputEmail} placeholder="likelion123@gmail.com"type="text"/>
          </FixContentBox>
        </Flex>
      </FixWrap>
      <Margin height="28" />
      <FixWrap>
        <Flex direction="row">
          <SetTitleBox>비밀번호</SetTitleBox>
          <FixContentBox>
          <input className="name" onChange={onChangeInputPassword} value={inputPassword} placeholder="••••••••"type="password"/>
          </FixContentBox>
        </Flex>
      </FixWrap>
      <Margin height="28" />
      <FixWrap>
        <Flex direction="row">
          <SetTitleBox>비밀번호 확인</SetTitleBox>
          <FixContentBox>
          <input className="name" onChange={onChangeInputCheck} value={inputCheck} type="password"/>
          </FixContentBox>
        </Flex>
      </FixWrap>
      <Margin height="412" />
      <ButtonWrapper>
          <Button onClick={() => Toast("저장되었습니다")}>변경사항 저장</Button>
        </ButtonWrapper>
    </Layout>
  );
};

export default MyFixInform;