import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";

const InputWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  align-items: flex-start;
  gap: 56px;
  margin-bottom: 70px;
`;
const Password = styled.div``;

const ButtonWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  gap: 18px;
  margin-bottom: 130px;
`;

const Wrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  width: 100%;
  min-height: 780px;
  justify-content: space-between;
`;

const Login = () => {
  const [colorEmail, setColorEmail] = useState("gray");
  const [colorPW, setColorPW] = useState("gray");
  const [isCorrect, setIsCorrect] = useState("hidden");

  const onChangeEmail = (e) => {
    if (e.target.value === "") {
      setColorEmail("gray");
    } else {
      setColorEmail("purple");
    }
  };

  const onChangePW = (e) => {
    if (e.target.value === "") {
      setColorPW("gray");
    } else {
      setColorPW("purple");
      //비밀번호가 맞는지 알게되면 이 아래에있는 코드를 지워버리자~
      setIsCorrect("visible");
    }
  };

  const moveToPage = () => {};
  const forgetAccount = () => {};
  return (
    <Layout>
      <Wrapper>
        <Header back title="로그인" />

        <InputWrapper>
          <Input
            name="email"
            onChange={onChangeEmail}
            borderColor={colorEmail}
            placeholder="이메일"
          />
          <Password>
            <Input
              name="password"
              onChange={onChangePW}
              borderColor={colorPW}
              placeholder="비밀번호"
              type="password"
            />
            <Margin height="5" />
            <Typography
              style={{ visibility: isCorrect }}
              fontSize="14"
              color="red"
              fontWeight="400"
            >
              아이디 혹은 비밀번호가 틀렸습니다
            </Typography>
          </Password>
        </InputWrapper>

        <ButtonWrapper>
          <Button onClick={moveToPage}>로그인</Button>
          <Typography onClick={forgetAccount} fontWeight="400" color="gray">
            비밀번호를 잊어버렸어요
          </Typography>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Login;
