import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import { useNavigate } from "react-router-dom";
import Toast from "../../duckku-ui/Toast";
import axios from "axios";

const InputWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  align-items: flex-start;
  gap: 56px;
  margin-bottom: 70px;
`;
const Password = styled.div``;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 56px;
`;

const Wrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  width: 100%;
  justify-content: space-between;
`;

const Login = () => {
  const [user, setUser] = useState({ email: "", pw: "" });
  const [colors, setColors] = useState({ email: "gray", pw: "gray" });
  const [valid, setValid] = useState({ pw: "hidden" });
  const navigate = useNavigate();

  //로그인 버튼을 누르면 실행
  const loginSuccess = () => {
    if (user.pw === "") return setValid({ pw: "visible" });
    setValid({ pw: "hidden" });

    axios
      .post(`${process.env.REACT_APP_API}/Login`, {
        userEmail: user.email,
        password: user.pw,
      })
      .then((r) => {
        console.log(r);
        navigate(`/artist-select`);
      })
      .catch((e) => {
        console.log(e);
        Toast("올바른 정보를 입력해주세요");
      });
  };

  //인풋에 변화가 생기면 실행
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (value === "") setColors({ ...colors, [name]: "gray" });
    else setColors({ ...colors, [name]: "purple" });
  };

  return (
    <Layout>
      <Header back title="로그인" />
      <Margin height="100" />

      <Wrapper>
        <InputWrapper>
          <Input
            name="email"
            onChange={onChange}
            borderColor={colors.email}
            placeholder="이메일"
            value={user.email}
          />
          <Password>
            <Input
              name="pw"
              onChange={onChange}
              borderColor={colors.pw}
              placeholder="비밀번호"
              type="password"
              value={user.pw}
            />
            <Margin height="5" />
            <Typography
              style={{ visibility: valid.pw }}
              fontSize="14"
              color="red"
              fontWeight="400"
            >
              아이디 혹은 비밀번호가 틀렸습니다
            </Typography>
          </Password>
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={loginSuccess}>로그인</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Login;
