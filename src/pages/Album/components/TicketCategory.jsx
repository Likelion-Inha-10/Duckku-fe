import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Flex from "../../../duckku-ui/Flex";
import Margin from "../../../duckku-ui/Margin";
import ImageCard from "../../../duckku-ui/ImageCard";
import album from "../../../assets/images/redvelvet.png";
import { BsTagFill } from "react-icons/bs";
import theme from "../../../assets/theme";
import { ReactComponent as Duck } from "../../../assets/svgs/DuckPurple.svg";
import A from "../../../assets/fonts/AlfaSlabOne-Regular.woff";

const TicketContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;

const TicketWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  column-gap: 10px;
  row-gap: 20px;
`;

const Text = styled(Typography)`
  @font-face {
    font-family: "A";
    src: url(${A}) format("woff");
    font-style: normal;
  }
`;

const GradationBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  --b: 5px;
  --c: linear-gradient(92.33deg, #7000ff 6.14%, #c15cff 94.68%);
  width: 100px;
  aspect-ratio: 1;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--c, linear-gradient(to right, #9c20aa, #fb3570));
    padding: var(--b);
    border-radius: 50%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Circle = styled.div`
  flex-direction: column;
  ${(props) => props.theme.flex.flexCenter};
  height: 92px;
  width: 92px;
  border-radius: 50px;
  background: radial-gradient(
        71.5% 71.5% at 25.5% 85.5%,
        rgba(219, 0, 255, 0.2) 0%,
        rgba(255, 255, 255, 0) 99.99%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        75.5% 75.5% at 86% 60%,
        rgba(112, 0, 255, 0.2) 0%,
        rgba(112, 0, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(
      161.36deg,
      rgba(175, 44, 255, 0.2) 18.26%,
      rgba(255, 255, 255, 0) 87.39%
    ),
    #f9f9f9;
`;

const TicketCategory = ({ data }) => {
  return (
    <>
      <TicketWrapper>
        {data.map((d) => (
          <GradationBorder>
            <Circle>
              <Duck height="32px" width="32px" />
              <Text style={{ fontFamily: "A" }}>TICKET</Text>
            </Circle>
          </GradationBorder>
        ))}
      </TicketWrapper>
    </>
  );
};

export default TicketCategory;
