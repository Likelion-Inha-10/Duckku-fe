import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5";
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
      <Back onClick={moveToBack} back={props.back}>
        <IoChevronBackSharp size="30" color={theme.colors.black} />
      </Back>
      <Margin row size="50" />
      <Title title={props.title}>
        <Typography fontSize="20">{props.title}</Typography>
      </Title>
    </Wrapper>
  );
};

export default Header;
