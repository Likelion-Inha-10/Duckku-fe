import React, { useState } from "react";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import Modal from "./Modal/Modal";
import { VscAdd } from "react-icons/vsc";
import { FaWonSign } from "react-icons/fa";

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
`;

const PurchaseImage = styled.div`
  width: 324px;
  height: 384px;
  border-radius: 10% 10% 30% 30%;
  margin-top: 50px;
  background-color: gray;
  background-image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/463/170/80463170_1410941472017_1_600x600.JPG";
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

const ModalUnderLine = styled.div`
  width: 100%;
  border-bottom: 3px solid lightgray;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const PurchaseInline = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 10px;
`;

const CountingSection = styled.div`
  width: 100%;
  display: flex;
`;

const PriceAllSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const PriceSection = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const TotalPriceFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TotalPriceSection = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const PurchaseBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [numberInclude, setIncludeNumber] = useState(0);

  const increaseIncludeNumber = () => {
    setIncludeNumber(numberInclude + 1);
  };

  const decreaseIncludeNumber = () => {
    setIncludeNumber(numberInclude - 1);
  };

  const [numberNotInclude, setNotIncludeNumber] = useState(0);

  const increaseNotInclude = () => {
    setNotIncludeNumber(numberNotInclude + 1);
  };

  const decreaseNotInclude = () => {
    setNotIncludeNumber(numberNotInclude - 1);
  };

  return (
    <React.Fragment>
      <Button
        onClick={openModal}
        borderRadius="5"
        width="350"
        height="60"
        fontSize="16"
        fontWeight="normal"
      >
        바로 구매
      </Button>
      <Modal open={modalOpen} close={closeModal}>
        <PurchaseInline>
          <Typography bold16>응모권 포함</Typography>
          <Typography fontSize="10">
            (온라인 앨범, 포토카트 교환권, 응모권 포함)
          </Typography>
        </PurchaseInline>
        <PriceAllSection>
          <CountingSection>
            <Margin width="10" />

            <Button
              fontSize="5"
              height="13"
              width="13"
              onClick={decreaseIncludeNumber}
            >
              -
            </Button>
            <Margin width="10" />
            <Typography>{numberInclude}</Typography>
            <Margin width="10" />
            <Button
              color="black"
              fontSize="5"
              height="13"
              width="13"
              onClick={increaseIncludeNumber}
            >
              <VscAdd />
            </Button>
          </CountingSection>
          <PriceSection>
            <Typography thin16>
              <FaWonSign />
              {13700 * numberInclude}
            </Typography>
          </PriceSection>
        </PriceAllSection>

        <ModalUnderLine />
        <PurchaseInline>
          <Typography bold16>응모권 미포함</Typography>
          <Typography fontSize="10">(온라인 앨범, 포토카트 교환권)</Typography>
        </PurchaseInline>
        <PriceAllSection>
          <CountingSection>
            <Margin width="10" />
            <Button
              fontSize="5"
              height="13"
              width="13"
              onClick={decreaseNotInclude}
            >
              -
            </Button>
            <Margin width="10" />
            <Typography>{numberNotInclude}</Typography>
            <Margin width="10" />
            <Button
              color="black"
              fontSize="5"
              height="13"
              width="13"
              onClick={increaseNotInclude}
            >
              <VscAdd />
            </Button>
          </CountingSection>

          <PriceSection>
            <Typography regular16>
              <FaWonSign />
              {numberNotInclude * 9700}
            </Typography>
          </PriceSection>
        </PriceAllSection>
        <ModalUnderLine />

        <TotalPriceFlex>
          <TotalPriceSection>
            <Typography>
              총 상품금액({numberInclude + numberNotInclude}개)
            </Typography>
            <Typography thin14>
              <FaWonSign />
              {13700 * numberInclude + numberNotInclude * 9700}
            </Typography>
          </TotalPriceSection>
        </TotalPriceFlex>
      </Modal>
    </React.Fragment>
  );
};

const Purchase = () => {
  return (
    <AllWrapper>
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
      <ButtonWrapper>
        <PurchaseBtn />
      </ButtonWrapper>
    </AllWrapper>
  );
};

export default Purchase;
