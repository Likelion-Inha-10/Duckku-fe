import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import { BsChevronExpand } from "react-icons/bs";

const CardWrapper = styled.div`
  width: 328px;
  height: 80px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArtistImageBox = styled.div`
  width: 80px;
  height: 80px;
  background: url(${(props) => (props.imgLink ? props.imgLink : "")}) no-repeat
    center;
  background-size: cover;
  border-radius: 50%;
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
  display: none;
`;

const InfoTextWrapper = styled.div`
  width: fit-content;
  height: 38px;
  margin-left: 32px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArtistCard = (props) => {
  return (
    <CardWrapper>
      <LeftWrapper>
        <ArtistImageBox imgLink={props.imgLink}>
          <NumberBox>
            <Typography bold16 color="white">
              {props.id}
            </Typography>
          </NumberBox>
        </ArtistImageBox>
        <InfoTextWrapper>
          <Typography bold16>{props.artistName}</Typography>
          <Typography regular14 color="gray">
            {props.date}
          </Typography>
        </InfoTextWrapper>
      </LeftWrapper>
      <BsChevronExpand size="24" color="#afafaf" />
    </CardWrapper>
  );
};

export default ArtistCard;
