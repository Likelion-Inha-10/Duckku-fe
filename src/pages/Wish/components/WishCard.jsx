import React from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CardContain = styled.div`
  width: 154px;
  height: 273px;
  margin-left: 9px;
  margin-right: 9px;
  margin-bottom: 24px;
  cursor: pointer;
`;

const CardImage = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 20px;
  background-color: gray;
  background-image: url(${(props) => (props.Img ? props.Img : "none")});
  background-position: center;
  background-size: cover;
`;

const CardImageWrraper = styled.div`
  width: 154px;
  height: auto;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`;

const HeartSection = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  margin-right: 8px;
  margin-top: 8px;
  opacity: 90%;
  position: absolute;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: red;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 8px;
  padding-right: 8px;
`;

const SingInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WishCard = (props) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`/purchase`);
  };
  return (
    <CardContain onClick={() => onClickCard()}>
      <CardImageWrraper>
        <HeartSection>
          <AiFillHeart />
        </HeartSection>
        <CardImage Img={props.Img} />
      </CardImageWrraper>
      <TextWrapper>
        <Typography bold16>{props.SingTitle}</Typography>
        <SingInfoWrapper>
          <Typography thin14 color="gray">
            {props.Singer}
          </Typography>
          <Typography thin14 color="gray">
            {props.SingYear}
          </Typography>
        </SingInfoWrapper>
      </TextWrapper>
    </CardContain>
  );
};

export default WishCard;
