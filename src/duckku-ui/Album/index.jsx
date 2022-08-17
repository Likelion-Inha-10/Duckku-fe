import styled from "styled-components";
import Typography from "../Typography";
import Margin from "../Margin/index";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 154px;
  height: 273px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const ImageContainer = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
  background: url(${(props) => (props.imgLink ? props.imgLink : "")}) no-repeat;
  background-size: cover;
`;

const AlbumInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 8px;
  padding-right: 8px;
`;

const BottomTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconSection = styled.div`
  width: 29px;
  height: 29px;
  padding: 2px;
  overflow: visible;
  margin-left: 114px;
  margin-top: 8px;
  background-color: white;
  opacity: 90%;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const Album = (props) => {
  const navigate = useNavigate();

  const onClickAlbum = () => {
    console.log(props.link);
    navigate(`${props.link}`);
  };
  return (
    <Box onClick={() => onClickAlbum()}>
      <svg width="0" height="0">
        <linearGradient id="purple" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7001FF" offset="0" />
          <stop stopColor="#C15CFF" offset="50" />
        </linearGradient>
      </svg>
      <ImageContainer imgLink={props.imgLink}>
        <IconSection visible={props.isChecked}>
          <HiOutlineCheckCircle
            size="36px"
            opacity="100%"
            style={{ stroke: "url(#purple)", overflow: "visible" }}
          />
        </IconSection>
      </ImageContainer>
      <Margin height="13" />
      <AlbumInfoWrapper>
        <Typography bold16>{props.albumTitle}</Typography>
        <BottomTextWrapper>
          <Typography thin14 color="gray">
            {props.artist}
          </Typography>
          <Typography thin14 color="gray">
            {props.year}
          </Typography>
        </BottomTextWrapper>
      </AlbumInfoWrapper>
    </Box>
  );
};

export default Album;
