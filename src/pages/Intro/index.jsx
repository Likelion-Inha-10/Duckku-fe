import Button from "../../duckku-ui/Button";
import Footer from "../../duckku-ui/Footer";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Toast from "../../duckku-ui/Toast";

const Intro = () => {
  return (
    <>
      <Layout>
        <Header back title="타이틀" zIndex="0" />
        <Margin height="50" />

        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Margin height="88" />
        <Footer active="my" />
      </Layout>
    </>
  );
};

export default Intro;
