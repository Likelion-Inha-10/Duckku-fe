import { React } from "react";
import "./modal.css";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { VscChevronLeft } from "react-icons/vsc";

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 48px;
  border: none;
`;

const BackWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-left: 19px;
  position: fixed;
  top: 10;
`;

const AlbumNameSection = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

const PhotoCardSection = styled.div`
  width: 326px;
  height: 466px;
  background-image: url(${(props) => props.Photo});
  background-size: cover;
  border-radius: 48px;
  border: none;
  background-repeat: no-repeat;
`;

const AlbumInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 26px;
`;

const AlbumListTitleWrapper = styled.div`
  width: 312px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
  margin-left: 41px;
  margin-bottom: 17px;
`;

const AlbumListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AlbumList = styled.div`
  width: 312px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const EachList = (props) => {
  return (
    <AlbumList>
      <Typography thin16 color="white">
        {props.SingName}
      </Typography>
      <Typography thin16 color="white">
        {props.SingTime}
      </Typography>
    </AlbumList>
  );
};

const ListsMap = (props) => {
  return props.Lists.map((v) => (
    <EachList key={v.SingName} SingName={v.SingName} SingTime={v.SingTime} />
  ));
};

const ModalAlbum = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modalAlbum" : "modalAlbum"}>
      {open ? (
        <section>
          <Margin width="340" height="18" />
          <BackWrapper>
            <button className="close" onClick={close}>
              <VscChevronLeft size="36" color="white" />
            </button>
          </BackWrapper>

          <Margin width="340" height="26" />
          <AlbumNameSection>
            <Typography color="white" bold24>
              {props.AlbumName}
            </Typography>
          </AlbumNameSection>
          <CardWrapper>
            <PhotoCardSection Photo="http://img.tf.co.kr/article/stars/2016/10/17/20169331476691408.jpg" />
          </CardWrapper>

          <AlbumInfoWrapper>
            <Typography thin16 color="white">
              {props.AlbumNumber}
            </Typography>
            <Typography thin16 color="white">
              {props.MadeDate}
            </Typography>
          </AlbumInfoWrapper>
          <AlbumListTitleWrapper>
            <Typography bold21 color="white">
              수록곡
            </Typography>
            <Typography bold21 color="white">
              총 6곡
            </Typography>
          </AlbumListTitleWrapper>

          <AlbumListWrapper>
            <ListsMap Lists={props.Lists} />
          </AlbumListWrapper>
          <Margin width="340" height="200" />
        </section>
      ) : null}
    </div>
  );
};

export default ModalAlbum;
