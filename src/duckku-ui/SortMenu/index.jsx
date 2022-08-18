import styled from "styled-components";
import Flex from "../Flex";
import Typography from "../Typography";
import { useState } from "react";

const Wrapper = styled(Flex)`
  width: 98px;
  height: 19px;
`;

const Text = styled(Typography)`
  width: 45px;
  height: 19px;
  cursor: pointer;
`;

const SortMenu = () => {
  const [currentMenu, setCurrentMenu] = useState("최신순");

  const toggleMenu = () => {
    if (currentMenu === "등록순") {
      setCurrentMenu("최신순");
    } else {
      setCurrentMenu("등록순");
    }
  };
  return (
    <>
      <Wrapper justify="space-between" align="center">
        {currentMenu === "최신순" ? (
          <>
            <Text bold16 color="black">
              최신순
            </Text>
            <Text bold16 color="gray" onClick={() => toggleMenu()}>
              등록순
            </Text>
          </>
        ) : (
          <>
            <Text bold16 color="gray" onClick={() => toggleMenu()}>
              최신순
            </Text>
            <Text bold16 color="black">
              등록순
            </Text>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default SortMenu;
