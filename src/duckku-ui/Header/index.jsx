import styled from "styled-components";
import { VscChevronLeft } from "react-icons/vsc";
import Typography from "../Typography";
import Flex from "../Flex";
import theme from "../../assets/theme";
import Margin from "../Margin";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 68px;
`;

const Title = styled.div`
  color: black;
  font-size: 24px;
  visibility: hidden;

  ${(props) =>
    props.title &&
    `
        visibility: visible;
    `}
`;

const Back = styled.div`
  visibility: hidden;

  ${(props) =>
    props.back &&
    `
  visibility: visible;
`}
`;

const Header = (props) => {
  const moveToBack = () => {
    // 추후 작성 예정
  };
  return (
    <Wrapper align="center">
      <Margin width="20" />
      <Back onClick={moveToBack} back={props.back}>
        <VscChevronLeft size="25" color={theme.colors.black} />
      </Back>
      <Margin width="6" />
      <Title title={props.title}>
        <Typography fontSize="20">{props.title}</Typography>
      </Title>
    </Wrapper>
  );
};

export default Header;
