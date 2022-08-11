import React, { useState } from "react";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import Modal from "./Modal/Modal";
import { FaWonSign } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
  justify-content: center;
`;
// 이미지 부분

const PurchaseImageWrapper = styled.div`
  width: 324px;
  height: auto;
`;

const PurchaseImage = styled.div`
  width: 324px;
  height: 384px;
  border-radius: 10% 10% 30% 30%;
  margin-top: 50px;
  background-color: gray;
  background-image: url("https://th.bing.com/th/id/R.5e9ac488f0fe4831728673c1ae26cdb1?rik=utuJcfkDCV%2bY0A&riu=http%3a%2f%2fimage.yes24.com%2fmomo%2fTopCate2520%2fMidCate005%2f251947388.jpg&ehk=2kmSkQWNOz%2b7c%2fRy7B7uuI6tZQmtzG42pUuSVkRK6N8%3d&risl=&pid=ImgRaw&r=0");
`;

//하트 부분
const HeartSection = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 275px;
  margin-top: 40px;
  background-color: white;
  opacity: 90%;
  position: absolute;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ff0000;
`;

const HeartButton = () => {
  const [like, setLike] = useState(false);

  return (
    <HeartSection onClick={() => setLike(!like)}>
      {like ? <AiFillHeart /> : <AiOutlineHeart />}
    </HeartSection>
  );
};

//노래 제목 가수 부분
const IntrodSection = styled.div`
  width: 80%;
  height: auto;
  text-align: left;
`;

// 트랙 부분
const TrackWrapper = styled.div`
  width: 80%;
  height: auto;
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
  width: 55%;
  height: 40px;
  margin-left: 10%;
`;

const StyleFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.3px;
  padding-bottom: 0.5px;
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
  align-items: center;
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
  align-items: center;
`;

const WonPadding = styled.div`
  width: 100%;
  height: auto;
  display: inline;
  margin-top: 20px;
`;

const TotalPriceFlex = styled.div`
  width: 96%;
  height: auto;
  display: flex;
  justify-content: space-between;
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
        borderRadius="20"
        width="350"
        height="60"
        fontSize="16"
        fontWeight="normal"
      >
        바로 구매
      </Button>
      <Modal open={modalOpen} close={closeModal}>
        <PurchaseInline>
          <Typography bold16>응모권 포함</Typography>&nbsp;
          <Typography thin14 color="gray">
            &#40;온라인 앨범, 포토카트 교환권, 응모권 포함&#41;
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
              <StyleFlex>-</StyleFlex>
            </Button>
            <Margin width="10" />
            <Typography>{numberInclude}</Typography>
            <Margin width="10" />
            <Button
              fontSize="5"
              height="13"
              width="13"
              onClick={increaseIncludeNumber}
            >
              <StyleFlex>+</StyleFlex>
            </Button>
          </CountingSection>
          <PriceSection>
            <Typography thin16>
              <WonPadding>
                <FaWonSign />
              </WonPadding>
              &nbsp;
              {13700 * numberInclude}
            </Typography>
          </PriceSection>
        </PriceAllSection>

        <ModalUnderLine />
        <PurchaseInline>
          <Typography bold16>응모권 미포함</Typography>&nbsp;
          <Typography thin14 color="gray">
            &#40;온라인 앨범, 포토카트 교환권&#41;
          </Typography>
        </PurchaseInline>
        <PriceAllSection>
          <CountingSection>
            <Margin width="10" />
            <Button
              fontSize="8"
              height="13"
              width="13"
              onClick={decreaseNotInclude}
            >
              <StyleFlex>-</StyleFlex>
            </Button>
            <Margin width="10" />
            <Typography>{numberNotInclude}</Typography>
            <Margin width="10" />
            <Button
              fontSize="5"
              height="13"
              width="13"
              onClick={increaseNotInclude}
            >
              <StyleFlex>+</StyleFlex>
            </Button>
          </CountingSection>

          <PriceSection>
            <Typography regular16>
              <FaWonSign />
              &nbsp;
              {numberNotInclude * 9700}
            </Typography>
          </PriceSection>
        </PriceAllSection>
        <ModalUnderLine />

        <TotalPriceFlex>
          <TotalPriceSection>
            <Typography>
              총 상품금액&nbsp;({numberInclude + numberNotInclude}개)
            </Typography>
            <Typography thin14>
              <FaWonSign />
              &nbsp;
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
        <PurchaseImageWrapper>
          <HeartButton />
          <PurchaseImage></PurchaseImage>
        </PurchaseImageWrapper>
        <Margin width="390" height="20" />
        <IntrodSection>
          <Typography bold24>The ReVe Festival ‘Day2’</Typography>
          <Margin width="390" height="5" />

          <Typography thin16 color="gray">
            레드벨벳
          </Typography>
        </IntrodSection>
        <Margin width="100%" height="30" />

        <TrackWrapper>
          <Typography bold16>수록곡</Typography>

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
            <Typography thin14 color="gray">
              3:21
            </Typography>
          </TrackListWrapper>

          <TrackListWrapper>
            <TrackListNum>
              <Typography thin14 color="gray" center>
                2
              </Typography>
            </TrackListNum>
            <TrackListTitle>
              <Typography thin14 color="gray">
                Feels Like Rooler
              </Typography>
            </TrackListTitle>
            <Typography thin14 color="gray">
              3:21
            </Typography>
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
            <Typography thin14 color="gray">
              3:21
            </Typography>
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
            <Typography thin14 color="gray">
              3:21
            </Typography>
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
            <Typography thin14 color="gray">
              3:21
            </Typography>
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
            <Typography thin14 color="gray">
              3:21
            </Typography>
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
