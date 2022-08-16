import React from "react";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import { AiFillHeart } from "react-icons/ai";

const CardContain = styled.div`
  width: 154px;
  height: 273px;
  margin: 10px;
  margin-bottom: 20px;
`;

const CardImage = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 10% 10% 10% 10%;
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
  margin-right: 10px;
  margin-top: 5px;
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

const SingInfoWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const WishCard = (props) => {
  return (
    <CardContain>
      <CardImageWrraper>
        <HeartSection>
          <AiFillHeart />
        </HeartSection>
        <CardImage Img={props.Img} />
      </CardImageWrraper>
      <Typography bold16>{props.SingTitle}</Typography>
      <SingInfoWrapper>
        <Typography regular16>{props.Singer}</Typography>
        <Typography regular16>{props.SingYear}</Typography>
      </SingInfoWrapper>
    </CardContain>
  );
};

export default WishCard;
