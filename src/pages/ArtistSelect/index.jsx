import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import InputBox from "./components/inputBox";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import Flex from "../../duckku-ui/Flex";
import OptionButton from "./components/optionButton";

const TitleBox = styled.div`
  width: 320px;
  padding-left: 10px;
`;

const ArtistSelect = () => {
  const [agencies, setAgencies] = useState([
    { id: "HYBE", label: "HYBE", selected: false },
    { id: "SM", label: "SM", selected: false },
    { id: "YG", label: "YG", selected: false },
    { id: "JYP", label: "JYP", selected: false },
    { id: "울림", label: "울림", selected: false },
    { id: "젤리피쉬", label: "젤리피쉬", selected: false },
    { id: "CUBE", label: "CUBE", selected: false },
    { id: "FNC", label: "FNC", selected: false },
  ]);

  const [optionButtons, setOptionButtons] = useState();

  const onAgencyClick = (e) => {
    console.log(e.target.name);
    setOptionButtons(
      agencies.map((agency) => {
        if (agency.id === e.target.name) {
          if (agency.selected) return { ...agency, selected: false };
          return { ...agency, selected: true };
        }
        return { ...agency };
      })
    );
  };

  useEffect(() => {
    setOptionButtons(
      agencies.map((agency) => (
        <OptionButton
          name={agency.id}
          activated={agency.selected}
          onClick={onAgencyClick}
        >
          {agency.label}
        </OptionButton>
      ))
    );
  }, [agencies]);

  return (
    <Layout>
      <Header back title="아티스트 설정" />
      <Margin height="32" />
      <TitleBox>
        <Flex direction="column" justify="left">
          <Typography bold21>좋아하는 아티스트를</Typography>
          <Typography bold21>선택해주세요.</Typography>
        </Flex>
      </TitleBox>
      <Margin height="30" />
      <InputBox placeholder="아티스트 검색" />
      <Margin height="21" />
      {optionButtons}
      <OptionButton>JYP</OptionButton>
      <Button backgroundColor="gray">아티스트 선택</Button>
    </Layout>
  );
};

export default ArtistSelect;
