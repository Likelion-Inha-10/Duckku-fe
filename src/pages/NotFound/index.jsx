import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout/index";
import { VscWarning } from "react-icons/vsc";
import Typography from "../../duckku-ui/Typography";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";

const Warning = styled.div`
  ${(props) => props.theme.flex.flexCenterColumn};
  height: 80vh;
`;
const NotFound = () => {
  return (
    <Layout>
      <Header back />
      <Warning>
        <VscWarning size="60" color="#E1413D" />
        <Margin height="24" />

        <Typography bold21>서비스 준비중입니다.</Typography>
        <Margin height="24" />

        <Typography thin14 center style={{ lineHeight: "19px" }}>
          보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다!
          <br />
          빠른 시일 내에 준비하여 찾아뵙겠습니다.
        </Typography>
      </Warning>
    </Layout>
  );
};

export default NotFound;
