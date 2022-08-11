import styled, { css } from "styled-components";
import Typography from "../../../duckku-ui/Typography";

const CardWrapper = styled.div`
  width: 326px;
  height: 484px;
  background: url(${(props) => (props.link ? props.link : "")}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

const ArtistNameBox = styled.div`
  width: fit-content;
  height: 34px;
  margin-top: 16px;
  margin-left: 16px;
  padding-left: 13px;
  padding-right: 13px;
  border-radius: 10px;
  background: linear-gradient(98.1deg, #ff9b7b 8.9%, #ffc6b4 85.16%);
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const ArtistLogoBox = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 16px;
  margin-left: 16px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const ArtistCard = (props) => {
  return (
    <CardWrapper link={props.link}>
      <ArtistNameBox>
        <Typography bold16 color="white">
          RedVelvet
        </Typography>
      </ArtistNameBox>
      <ArtistLogoBox />
    </CardWrapper>
  );
};

export default ArtistCard;
