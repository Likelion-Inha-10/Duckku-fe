import React from "react";
import Layout from "../../duckku-ui/Layout";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { ReactComponent as Duck } from "../../assets/svgs/DuckPurple.svg";
import theme from "../../assets/theme";
import Flex from "../../duckku-ui/Flex";
import Margin from "../../duckku-ui/Margin";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Flex)`
  max-height: 780px;
  min-height: 430px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Login = styled(Flex)``;

const Start = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Margin height="80" />
      <Wrapper>
        <Typography bold24 center style={{ lineHeight: "29px" }}>
          어차피 덕질할거
          <br />
          행복하게 덕질하자
        </Typography>
        <Duck height="120px" width="120px" />
        <Login>
          <Typography
            onClick={() => navigate("/sign-up")}
            regular16
            style={{
              cursor: "pointer",
              color: "#999999",
            }}
          >
            이메일 회원가입
          </Typography>

          <Typography
            regular16
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              color: "#999999",
            }}
          >
            I
          </Typography>

          <Typography
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              fontFamily: "Pretendard-Regular",
              fontSize: "16px",
              fontWeight: "700",
              background: theme.colors.main,
              color: "transparent",
              webkitBackgroundClip: "text",
            }}
          >
            이메일 로그인
          </Typography>
        </Login>
      </Wrapper>
    </Layout>
  );
};

export default Start;
