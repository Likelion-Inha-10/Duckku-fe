import Button from "../../duckku-ui/Button";
import Footer from "../../duckku-ui/Footer";
import Header from "../../duckku-ui/Header";
import ImageCard from "../../duckku-ui/ImageCard";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import RedVelvet from "../../assets/images/redvelvet.png";
import Toast from "../../duckku-ui/Toast";
import Dimmer from "../../duckku-ui/Dimmer";
import ResponsiveHeader from "../../duckku-ui/ResponsiveHeader";

const Intro = () => {
  return (
    <>
      <Layout>
        {/* <Header backWhite back title="회원가입" /> */}
        <ResponsiveHeader back></ResponsiveHeader>
        <Margin height="50" />

        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Button onClick={() => Toast("로그인 되었습니다")}>로그인</Button>
        <Margin height="88" />
        <Footer active="my" />
      </Layout>
    </>
  );
};

export default Intro;
