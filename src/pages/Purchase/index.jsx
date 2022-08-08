import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Input from "../../duckku-ui/Input";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";

const ButtonWrapper = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

const PurchaseImage = styled.div`
  width: 338px;
  height: 483px;
  border-radius: 10%;
  margin-top: 50px;
  background-color: gray;
  background-image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/463/170/80463170_1410941472017_1_600x600.JPG";
`;

const PurchaseInfo = styled.div`
  width: 100%;
  height: 200px;
`;

const TrackWrapper = styled.div`
  width: 80%;
  height: auto;
`;

const TrackUnderLine = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 0.1px solid gray;
`;

const TrackListWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 20px;
`;

const TrackListNum = styled.div`
  width: 20%;
  height: 40px;
`;

const TrackListTitle = styled.div`
  width: 80%;
  height: 40px;
  margin-left: 10%;
`;

const Purchase = () => {
  return (
    <Layout>
      <Header back title="   앨범 구매하기" />
      <PurchaseImage />
      <Margin width="390" height="20" />
      <Typography bold24>20</Typography>
      <Margin width="390" height="20" />
      <Typography thin16 color="gray">
        혁오
      </Typography>
      <Margin width="100%" height="30" />
      <ButtonWrapper>
        <Button
          borderRadius="5"
          width="120"
          height="50"
          fontSize="16"
          fontWeight="normal"
        >
          찜하기
        </Button>
        <Button
          borderRadius="5"
          width="120"
          height="50"
          fontSize="16"
          fontWeight="normal"
        >
          바로 결제
        </Button>
      </ButtonWrapper>
      <TrackWrapper>
        <TrackUnderLine>
          <Typography thin16 color="gray">
            트랙목록
          </Typography>
        </TrackUnderLine>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              1
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              Lonely
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              2
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              Feels Like Rooler - Coaster Ride
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              3
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              Ohio
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              4
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              위잉위잉
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              5
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              Our Place
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>

        <TrackListWrapper>
          <TrackListNum>
            <Typography thin14 color="gray" center>
              6
            </Typography>
          </TrackListNum>
          <TrackListTitle>
            <Typography thin14 color="gray">
              I Have No Hometown
            </Typography>
          </TrackListTitle>
        </TrackListWrapper>
      </TrackWrapper>
    </Layout>
  );
};

export default Purchase;
