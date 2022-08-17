import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import toast from "react-simple-toasts";
import axios from "axios";

const InputWrapper = styled.div`
  margin-top: 10px;
  ${(props) => props.theme.flex.flexCenterColumn};
  align-items: flex-start;
  gap: 6vh;
`;
const SubText = styled.div`
  height: 38px;
`;

const ButtonWrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  gap: 18px;
  margin-bottom: 112px;
`;

const Wrapper = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  width: 100%;
  height: 100%;
  min-height: 760px;
  justify-content: space-between;
`;

const SignUp = ({ api_url }) => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPW = useRef();
  const inputPW2 = useRef();
  const last = useRef();

  const [user, setUser] = useState({ name: "", email: "", pw: "", pw2: "" });
  const [alert, setAlert] = useState({
    email: true,
    pw: true,
    pw2: true,
  });
  const [colors, setColors] = useState({
    name: "gray",
    email: "gray",
    pw: "gray",
    pw2: "gray",
    submitButton: "gray",
  });

  //회원가입 버튼 색 바꾸는거
  useEffect(() => {
    for (var key of Object.keys(user)) {
      if (user[key] === "") {
        return;
      }
    }
    setColors({ ...colors, submitButton: "main" });
  }, [user]);

  //밑줄 색 바꾸는거, user에 값 저장하는거, 유효성검사
  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "email") {
      const emailRegex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (emailRegex.test(e.target.value)) setAlert({ ...alert, [name]: true });
      else setAlert({ ...alert, [name]: false });
      setUser({ ...user, email: e.target.value });
    }

    if (name === "pw") {
      if (value.length < 8) setAlert({ ...alert, [name]: false });
      else setAlert({ ...alert, [name]: true });
      setUser({ ...user, [name]: value });
    }
    if (name === "pw2") {
      if (user.pw !== value) setAlert({ ...alert, [name]: false });
      else setAlert({ ...alert, [name]: true });
    }

    if (value !== "") {
      setColors({ ...colors, [name]: "purple" });
    } else {
      setColors({ ...colors, [name]: "gray" });
    }
  };

  const submit = () => {
    //조건 확인
    for (var key of Object.keys(alert)) {
      if (alert[key] === false) {
        return console.log("조건 확인해!");
      }
    }
    //다 입력 되었는지 확인
    for (var key of Object.keys(user)) {
      if (user[key] === "") {
        return console.log("다 입력해!!");
      }
    }
    //가입 성공했다는 토스트와 페이지 이동
    axios
      .post(`${api_url}/Signup`, {
        userName: user.name,
        userEmail: user.email,
        password1: user.pw,
        password2: user.pw2,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  //이건 있어도 되고 없어도 되는 기능
  //엔터를 누르면 다음 항목으로 넘어간다.
  //클릭하기 귀찮아서 추가함
  const next = (e) => {
    const { name } = e.target;
    if (name === "name" && e.key === "Enter") {
      inputEmail.current.focus();
    }
    if (name === "email" && e.key === "Enter") {
      inputPW.current.focus();
    }
    if (name === "pw" && e.key === "Enter") {
      inputPW2.current.focus();
    }
    if (name === "pw2" && e.key === "Enter") {
      last.current.focus();
    }
  };

  return (
    <Layout>
      <Wrapper>
        <Header back title="회원가입" />

        <InputWrapper>
          <Input
            borderColor={colors.name}
            value={user.name}
            onChange={onChange}
            name="name"
            placeholder="이름"
            onKeyUp={next}
            ref={inputName}
          />
          <SubText>
            <Input
              borderColor={colors.email}
              name="email"
              placeholder="이메일"
              onKeyUp={next}
              value={user.email}
              onChange={onChange}
              ref={inputEmail}
            />
            <Margin height="5" />
            <Typography
              style={{ visibility: `${alert.email ? "hidden" : "visible"}` }}
              fontSize="14"
              color="red"
              fontWeight="400"
            >
              메일 양식을 맞춰주세요
            </Typography>
          </SubText>
          <SubText>
            <Input
              borderColor={colors.pw}
              name="pw"
              placeholder="비밀번호"
              type="password"
              value={user.pw}
              onKeyUp={next}
              onChange={onChange}
              ref={inputPW}
            />
            <Margin height="5" />
            <Typography
              fontSize="14"
              color={`${alert.pw ? "gray" : "red"}`}
              fontWeight="400"
            >
              최소 8자리 이상으로 설정해주세요
            </Typography>
          </SubText>
          <SubText>
            <Input
              borderColor={colors.pw2}
              value={user.pw2}
              onChange={onChange}
              name="pw2"
              placeholder="비밀번호 확인"
              onKeyUp={next}
              type="password"
              ref={inputPW2}
            />
            <Margin height="5" />
            <Typography
              style={{ visibility: `${alert.pw2 ? "hidden" : "visible"}` }}
              fontSize="14"
              color="red"
              fontWeight="400"
            >
              비밀번호가 일치하지 않습니다
            </Typography>
          </SubText>
        </InputWrapper>

        <ButtonWrapper>
          <Button
            onClick={submit}
            ref={last}
            backgroundColor={colors.submitButton}
          >
            입력한 정보로 가입하기
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

export default SignUp;
