import Button from "../../duckku-ui/Button";
import Footer from "../../duckku-ui/Footer";
import Header from "../../duckku-ui/Header";
import ImageCard from "../../duckku-ui/ImageCard";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import RedVelvet from "../../assets/images/redvelvet.png";
import Toast from "../../duckku-ui/Toast";

const Intro = () => {
  return (
    <>
      <Layout>
        <Header backWhite back title="회원가입" />
        <Margin height="50" />

        <ImageCard src={RedVelvet} />

        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>

        <Margin height="88" />
        <Footer active="my" />
      </Layout>
    </>
  );
};

export default Intro;
