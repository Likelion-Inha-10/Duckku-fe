import styled from "styled-components";
import Footer from "../../duckku-ui/Footer";
import Layout from "../../duckku-ui/Layout";
import Flex from "../../duckku-ui/Flex";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import ArtistCard from "./components/artistCard";

// 상단 Title을 감쌀 component
const TitleBox = styled.div`
  width: 100%;
  padding-left: 40px;
  font-family: "Pretendard-Bold";
`;

const MainHome = () => {
  return (
    <Layout>
      <Margin height="37" />
      <TitleBox>
        <Flex direction="column" justify="left">
          <Typography fontSize="28" fontWeight="700">
            영우 님의
            <br />
            관심 아티스트
          </Typography>
        </Flex>
      </TitleBox>
      <Margin height="40" />
      <ArtistCard
        imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
        iconLink="https://kkukowiki.kr/images/e/e0/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%A1%9C%EA%B3%A0.png"
      />
      <Footer />
    </Layout>
  );
};

export default MainHome;
