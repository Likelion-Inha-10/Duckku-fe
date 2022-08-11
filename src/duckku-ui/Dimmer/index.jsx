import styled from "styled-components";
import Flex from "../Flex";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: rgba(
    29,
    29,
    31,
    ${(props) => (props.opacity ? props.opacity : "0.9")}
  );
  z-index: 100;

  & > div {
    width: 100%;
    height: 100%;
  }
`;

const Dimmer = ({ justify, align, opacity, children }) => (
  <Wrapper opacity={opacity}>
    <Flex direction="column" justify={justify} align={align}>
      {children}
    </Flex>
  </Wrapper>
);

export default Dimmer;

// <Dimmer opacity="0.8"/> : 화면 전체가 흐려짐
// <Dimmer opacity="0.8"><Button>로그인</Button></Dimmer> : 로그인 버튼을 제외한 화면 전체가 흐려짐
