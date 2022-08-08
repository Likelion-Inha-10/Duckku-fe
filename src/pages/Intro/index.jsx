import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";

const Intro = () => {
  return (
    <Layout>
      <Header back title="회원가입" />
      <Margin height="50" />
      <Button backgroundColor="main">가입하기</Button>
      <Input borderColor="purple" placeholder="이름"></Input>
    </Layout>
  );
};

export default Intro;
