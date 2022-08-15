import styled from "styled-components";
import { VscChevronLeft } from "react-icons/vsc";
import Typography from "../Typography";
import Flex from "../Flex";
import theme from "../../assets/theme";
import Margin from "../Margin";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled(Flex)`
  max-width: 390px;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const ChangeWrapper = styled(Flex)`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 1;
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
  const [currentY, setCurrentY] = useState(0);
  const updateScroll = () => {
    setCurrentY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(currentY);
  });

  const moveToBack = () => {
    // 추후 작성 예정
  };

  return (
    <Wrapper>
      {currentY < 561 ? (
        <Wrapper>
          <Margin width="20" />
          <Back onClick={moveToBack} back={props.back}>
            <VscChevronLeft size="36" color={theme.colors.white} />
          </Back>
          <Margin width="6" />
          <Title title={props.title}>
            <Typography bold24 color="headerText">
              {props.title}
            </Typography>
          </Title>
        </Wrapper>
      ) : (
        <ChangeWrapper>
          <Margin width="20" />
          <Back onClick={moveToBack} back={props.back}>
            <VscChevronLeft size="36" color={theme.colors.black} />
          </Back>
          <Margin width="6" />
          <Title title={props.title}>
            <Typography bold24 color="headerText">
              {props.title}
            </Typography>
          </Title>
        </ChangeWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
