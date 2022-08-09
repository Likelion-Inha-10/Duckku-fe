import Button from "../../duckku-ui/Button";
import Footer from "../../duckku-ui/Footer";
import Header from "../../duckku-ui/Header";
import ImageCard from "../../duckku-ui/ImageCard";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import RedVelvet from "../../assets/images/redvelvet.png";

const Intro = () => {
  return (
    <>
      <Layout>
        <Header back title="회원가입" />
        <Margin height="50" />

        <ImageCard src={RedVelvet} />

        <Margin height="75" />
        <Footer active="my" />
      </Layout>
    </>
  );
};

export default Intro;
