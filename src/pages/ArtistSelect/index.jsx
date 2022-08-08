import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import InputBox from "./components/inputbox";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import Flex from "../../duckku-ui/Flex";

const TitleBox = styled.div`
  width: 320px;
  padding-left: 10px;
`;

const ArtistSelect = () => {
  return (
    <Layout>
      <Header back title="아티스트 설정" />
      <Margin height="50" />
      <TitleBox>
        <Flex direction="column" justify="left">
          <Typography bold21>좋아하는 아티스트를</Typography>
          <Typography bold21>선택해주세요.</Typography>
        </Flex>
      </TitleBox>
      <Margin height="30" />
      <InputBox />
      <Button backgroundColor="gray">아티스트 선택</Button>
    </Layout>
  );
};

export default ArtistSelect;
