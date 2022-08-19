import styled from "styled-components";
import Button from "../../../duckku-ui/Button";
import Typography from "../../../duckku-ui/Typography";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

// 카드 전체 component
const CardWrapper = styled.div`
  width: 326px;
  height: 484px;
  margin-bottom: 29px;
  background: url(${(props) => (props.imgLink ? props.imgLink : "")}) no-repeat
    center;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 상단 아티스트 이름과 로고를 감쌀 component
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// 하단 버튼을 감쌀 component
const ButtomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-bottom: 21px;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(
    92.33deg,
    rgba(112, 0, 255, 0.8) 6.14%,
    rgba(193, 92, 255, 0.8) 94.68%
  );
  backdrop-filter: blur(4px);
`;

// 아티스트 이름 component
const ArtistNameBox = styled.div`
  width: fit-content;
  height: 34px;
  margin-top: 16px;
  margin-left: 16px;
  padding-left: 13px;
  padding-right: 13px;
  border-radius: 10px;
  background: linear-gradient(
    98.1deg,
    ${(props) => props.color1 || "black"} 8.9%,
    ${(props) => props.color2 || "black"} 85.16%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

// 아티스트 로고 component
const ArtistLogoBox = styled.div`
  width: 34px;
  height: 34px;
  margin-top: 16px;
  margin-left: 8px;
  border-radius: 50%;
  background: white url(${(props) => (props.iconLink ? props.iconLink : "")})
    no-repeat;
  background-size: 38px;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-left: 7px;
`;

// 버튼의 경우 Figma 기준으로 blur와 투명도가 들어갔으나, 해당 option이 없어 미구현
const ArtistCard = (props) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <CardWrapper imgLink={props.imgLink}>
        <TopWrapper>
          <ArtistNameBox color1={props.color1} color2={props.color2}>
            <Typography bold16 color="white">
              {props.artistName}
            </Typography>
          </ArtistNameBox>
          <ArtistLogoBox iconLink={props.iconLink} />
        </TopWrapper>
        <ButtomWrapper>
          <StyledButton width="150" height="44">
            <Flex>
              <Typography bold16 color="white">
                앨범함 가기
              </Typography>
              <HiOutlineChevronRight size="20" />
            </Flex>
          </StyledButton>
        </ButtomWrapper>
      </CardWrapper>
    </Wrapper>
  );
};

export default ArtistCard;
