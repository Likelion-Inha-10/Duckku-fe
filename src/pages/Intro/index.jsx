import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const Intro = () => {
  return (
    <Layout>
      <Wrapper>
        <Header back title="header" />
        <Button>button</Button>
        <Input placeholder="이름을 입력해주세요."></Input>
      </Wrapper>
    </Layout>
  );
};

export default Intro;
