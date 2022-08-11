import styled, { css } from "styled-components";
import Typography from "../../../duckku-ui/Typography";

// 앨범 전체 component
const AlbumWrapper = styled.div`
  width: 326px;
  height: 90px;
  background: #f9f9f9f0;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

const AlbumInfoWrapper = styled.div`
  width: 100%;
  height: 90px;
  padding-left: 27px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  vertical-align: middle;
  font-family: "Pretendard-Bold";
`;

const ArtistLogoBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white url(${(props) => (props.iconLink ? props.iconLink : "")})
    no-repeat;
  background-size: 44px;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-left: 16px;
`;

const AlbumInfoTextWrapper = styled.div`
  width: fit-content;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin-left: 16px;
`;

const NthAlbum = (props) => {
  return (
    <AlbumWrapper>
      <AlbumInfoWrapper>
        <Typography fontSize="28" color="darkGray">
          {props.rank}
        </Typography>
        <ArtistLogoBox iconLink={props.iconLink} />
        <AlbumInfoTextWrapper>
          <Typography bold16>{props.albumName}</Typography>
          <Typography thin14>
            {props.artistName} . {props.albumInfo}
          </Typography>
        </AlbumInfoTextWrapper>
      </AlbumInfoWrapper>
    </AlbumWrapper>
  );
};

export default NthAlbum;
