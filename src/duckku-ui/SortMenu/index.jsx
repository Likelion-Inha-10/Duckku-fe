import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";
import { IoChevronDownOutline } from "react-icons/io5";
import Margin from "../Margin";
import { useState } from "react";

const Wrapper = styled(Flex)`
  width: 86px;
  height: 27px;
  cursor: pointer;
`;

const IconWrapper = styled(Flex)`
  width: 18px;
  height: 18px;
`;

const SortMenu = () => {
  const [currentMenu, setCurrentMenu] = useState("등록순");

  const toggleMenu = () => {
    if (currentMenu === "등록순") {
      setCurrentMenu("최신순");
    } else {
      setCurrentMenu("등록순");
    }
  };
  return (
    <>
      <Wrapper justify="center" align="center" onClick={() => toggleMenu()}>
        <Typography bold16 color="gray">
          {currentMenu}
        </Typography>
        <Margin width="2" />
        <IconWrapper justify="center" align="center">
          <IoChevronDownOutline size="18" color="#AFAFAF" />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default SortMenu;
