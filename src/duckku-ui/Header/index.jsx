import styled from "styled-components";
import { VscChevronLeft } from "react-icons/vsc";
import Typography from "../Typography";
import Flex from "../Flex";
import theme from "../../assets/theme";
import Margin from "../Margin";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "1")};
  display: flex;
  align-items: center;
  background-color: white;
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
    <Wrapper zIndex={props.zIndex}>
      <Margin width="20" />
      {props.back && (
        <Back onClick={moveToBack} back={props.back}>
          {props.white ? (
            <VscChevronLeft size="36" color={theme.colors.white} />
          ) : (
            <VscChevronLeft size="36" color={theme.colors.black} />
          )}
        </Back>
      )}
      <Margin width="6" />
      <Title title={props.title}>
        <Typography bold24 color="headerText">
          {props.title}
        </Typography>
      </Title>
    </Wrapper>
  );
};

export default Header;
