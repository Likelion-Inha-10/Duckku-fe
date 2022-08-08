import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";

const Intro = () => {
  return (
    <Layout>
      <Header back title="회원가입" />
      <Button backgroundColor="gray">button</Button>
      <Input borderColor="purple" placeholder="이름을 입력해주세요."></Input>
    </Layout>
  );
};

export default Intro;
