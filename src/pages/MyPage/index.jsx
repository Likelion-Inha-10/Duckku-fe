import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Footer from "../../duckku-ui/Footer";
import Margin from "../../duckku-ui/Margin";
import Flex from "../../duckku-ui/Flex";
import Typography from "../../duckku-ui/Typography";
import { BiHeartCircle } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// 마이페이지 개인 정보 박스
const PersonalBox = styled.div`
  width: 330px;
`;

// 내 정보 박스
const InformBox = styled.div`
  width: 72px;
  height: 28px;
  border: 1px solid rgba(114, 105, 105, 0.5);
  border-radius: 5px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(114, 105, 105, 0.5);
  padding: 7px 0;
  cursor: pointer;
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
  cursor: pointer;
  width: 330px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);

  .icons {
    padding-top: 15px;
  }
`;

// 마이페이지 목록 div
const ListBox2 = styled.div`
  width: 330px;
  cursor: pointer;

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
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios.get(`${process.env.REACT_APP_API}/userinfo/${id}`).then((r) => {
      setUser(r.data[0]);
    });
  }, []);

  const goToInform = () => {
    navigate("/my-inform-fix");
  };

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <Header title="마이 페이지" />
          <Margin height="16" />
          <PersonalBox>
            <Flex direction="row" justify="space-between">
              <Typography bold21>{user.userName}</Typography>
              <InformBox onClick={goToInform}>정보 수정</InformBox>
            </Flex>
          </PersonalBox>
          <Margin height="6" />
          <EmailBox>
            <Flex direction="row" justify="left">
              <EmailContent>{user.userEmail}</EmailContent>
            </Flex>
          </EmailBox>
          <Margin height="6" />
          <ListBox onClick={() => navigate("/favorite-artist")}>
            <Flex direction="row" justify="left">
              <BiHeartCircle className="icons" size="36" />
              <ListContent>내 아티스트 관리</ListContent>
            </Flex>
          </ListBox>
          <Margin height="7" />
          <ListBox2 onClick={() => navigate("/not-found")}>
            <Flex direction="row" justify="left">
              <BsGrid className="icons" size="36" />
              <ListContent>내 뱃지 관리</ListContent>
            </Flex>
          </ListBox2>
          <Partition />
          <Margin height="7" />
          <ListBox onClick={() => navigate("/purchase-history")}>
            <Flex direction="row" justify="left">
              <FiLayers className="icons" size="36" />
              <ListContent>구매내역</ListContent>
            </Flex>
          </ListBox>
          <ListBox
            onClick={() => navigate("/payment")}
            style={{ paddingTop: "6px" }}
          >
            <Flex direction="row" justify="left">
              <BsCreditCard className="icons" size="36" />
              <ListContent>결제수단 관리</ListContent>
            </Flex>
          </ListBox>
          <Footer active="my" />
        </Layout>
      </motion.div>
    </>
  );
};

export default MyPage;
