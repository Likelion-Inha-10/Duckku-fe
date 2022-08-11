import styled from "styled-components";
import Margin from "../../../duckku-ui/Margin";
import Typography from "../../../duckku-ui/Typography";
import theme from "../../../assets/theme";

const CardWrapper = styled.div`
  width: 154px;
  height: 287px;
  margin-left: 9px;
  margin-right: 9px;
`;

const DeleteButton = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: #f5f5f5;
  position: absolute;
  margin-left: 132px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArtistImageBox = styled.div`
  width: 154px;
  height: 220px;
  background: url(${(props) => (props.imgLink ? props.imgLink : "")}) no-repeat;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-size: cover;
  border-radius: 20px;
`;

const NumberBox = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(29, 29, 31, 0.8);
  border-radius: 15px;
  position: absolute;
  margin-top: 8px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoTextWrapper = styled.div`
  width: fit-content;
  padding-left: 8px;
`;

const ArtistCard = (props) => {
  return (
    <CardWrapper>
      <DeleteButton>
        <hr
          size="12px"
          width="10px"
          height="0px"
          noshade="noshade"
          color={theme.colors.red}
        />
      </DeleteButton>
      <Margin height="11" />
      <ArtistImageBox imgLink={props.imgLink}>
        <NumberBox>
          <Typography bold16 color="white">
            {props.id}
          </Typography>
        </NumberBox>
      </ArtistImageBox>
      <Margin height="16" />
      <InfoTextWrapper>
        <Typography bold16>{props.artistName}</Typography>
        <Margin height="4" />
        <Typography bold14 color="gray">
          {props.date}
        </Typography>
      </InfoTextWrapper>
    </CardWrapper>
  );
};

export default ArtistCard;
