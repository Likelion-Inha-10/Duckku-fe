import React, { useState, useEffect } from "react";
import Button from "../../../duckku-ui/Button";
import Margin from "../../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../../duckku-ui/Typography";
import Modal from "../Modal/Modal";
import { FaWonSign } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ImPlus } from "react-icons/im";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
// 이미지 부분

const PurchaseImageWrapper = styled.div`
  width: 324px;
  height: auto;
`;

const PurchaseImage = styled.img`
  width: 324px;
  height: 384px;
  border-radius: 10% 10% 30% 30%;
  margin-top: 50px;
  background-color: gray;
`;

const ImageHeartWrapper = styled.div`
  width: 324px;
  height: 384px;
  margin-top: 50px;
  background-color: gray;
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
  border: 1.5px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #7000ff 6.14%, #c15cff 94.68%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: ${(props) => props.color || "gray"};
`;

const HeartButton = () => {
  const [like, setLike] = useState(false);

  return (
    <HeartSection onClick={() => setLike(!like)}>
      {like ? <AiFillHeart color="red" /> : <AiFillHeart />}
    </HeartSection>
  );
};

//노래 제목 가수 부분
const IntrodSection = styled.div`
  width: 80%;
  height: auto;
  text-align: left;
`;

const StyleFlex = styled.div`
  text-align: center;
  height: 8px;
  width: 8px;
`;

const ModalUnderLine = styled.div`
  width: 100%;
  border-bottom: 2px solid lightgray;
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
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 5px;
`;

const TotalPriceSection = styled.div`
  width: 343px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-right: 0;
`;

const Number = styled.div`
  width: 20px;
  height: auto;
  text-align: center;
`;

const Price = styled.div`
  width: 90px;
  height: auto;
  text-align: left;
`;

const ButtonFixed = styled.div`
  position: fixed;
  bottom: 30px;
`;

const TotalCountSection = styled.div`
  width: 45px;
  height: auto;
  display: flex;
  justify-content: end;
  margin-right: 130px;
`;

const CircleButton = styled.button`
  height: 13px;
  width: 13px;
  border: none;
  color: white;
  font-size: 12px;
  border-radius: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.main};
`;

const SmallTypo = styled.p`
  line-height: 2px;
`;

const PurchaseBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { albumId } = useParams();
  const [Ticket, setWithTicket] = useState("");
  const [NoTicket, setWithNoTicket] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/show_album_info/${albumId}`)
      .then((response) => {
        setWithTicket(response.data.price_with_ticket);
        console.log(Ticket);
        setWithNoTicket(response.data.price_without_ticket);
        console.log(response.data);
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post(`${process.env.REACT_APP_API}/buy_albums/${albumId}/${id}`, {
        album_with_ticket: { numberInclude },
        album_without_ticket: { numberNotInclude },
      })
      .then((response) => {
        console.log(response);
        console.log("구매가 완료되었습니다.");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    if (numberInclude == 0) {
      return numberInclude == 0;
    } else {
      return setIncludeNumber(numberInclude - 1);
    }
  };

  const [numberNotInclude, setNotIncludeNumber] = useState(0);

  const increaseNotInclude = () => {
    setNotIncludeNumber(numberNotInclude + 1);
  };

  let ButtonColor = "gray";

  const decreaseNotInclude = () => {
    if (numberNotInclude == 0) {
      ButtonColor = "gray";
      return numberNotInclude == 0;
    } else {
      ButtonColor = "red";
      return setNotIncludeNumber(numberNotInclude - 1);
    }
  };

  return (
    <React.Fragment>
      <ButtonFixed>
        <Button onClick={openModal}>바로 구매</Button>
      </ButtonFixed>
      <Modal open={modalOpen} close={closeModal}>
        <Margin width="300" height="38" />
        <PurchaseInline>
          <Typography bold16>응모권 포함</Typography>&nbsp;
          <Typography thin14 color="gray">
            &#40;온라인 앨범, 포토카트 교환권, 응모권 포함&#41;
          </Typography>
        </PurchaseInline>
        <PriceAllSection>
          <CountingSection>
            <Margin width="10" />

            <CircleButton
              onClick={decreaseIncludeNumber}
              backgroundColor="gray"
            >
              <SmallTypo>-</SmallTypo>
            </CircleButton>

            <Margin width="10" />
            <Number>
              <Typography regular16>{numberInclude}</Typography>
            </Number>
            <Margin width="10" />
            <CircleButton onClick={increaseIncludeNumber}>
              <SmallTypo>+</SmallTypo>
            </CircleButton>
          </CountingSection>
          <PriceSection>
            <Price>
              <Typography regular16>
                <WonPadding>
                  <FaWonSign style={{ paddingTop: "4px" }} />
                </WonPadding>
                &nbsp;
                {Ticket * numberInclude}
              </Typography>
            </Price>
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
            <CircleButton onClick={decreaseNotInclude} backgroundColor="gray">
              <SmallTypo>-</SmallTypo>
            </CircleButton>
            <Margin width="10" />
            <Number>
              <Typography regular16>{numberNotInclude}</Typography>
            </Number>
            <Margin width="10" />
            <CircleButton onClick={increaseNotInclude}>
              <SmallTypo>+</SmallTypo>
            </CircleButton>
          </CountingSection>

          <PriceSection>
            <Price>
              <Typography regular16>
                <FaWonSign style={{ paddingTop: "4px" }} />
                &nbsp;
                {numberNotInclude * NoTicket}
              </Typography>
            </Price>
          </PriceSection>
        </PriceAllSection>
        <ModalUnderLine />

        <TotalPriceFlex>
          <TotalPriceSection>
            <Typography bold16>
              총 상품금액&nbsp;({numberInclude + numberNotInclude}개)
            </Typography>

            <Price>
              <Typography bold16>
                <FaWonSign style={{ paddingTop: "4px" }} />
                &nbsp;
                {Ticket * numberInclude + numberNotInclude * NoTicket}
              </Typography>
            </Price>
          </TotalPriceSection>
        </TotalPriceFlex>
      </Modal>
    </React.Fragment>
  );
};

const PurchaseCard = (props) => {
  return (
    <>
      <PurchaseImageWrapper>
        <HeartButton />
        <PurchaseImage src={props.Img} />
      </PurchaseImageWrapper>
      <Margin width="390" height="20" />
      <IntrodSection>
        <Typography bold24>{props.SingName}</Typography>
        <Margin width="390" height="5" />

        <Typography thin16 color="gray">
          {props.SingerName}
        </Typography>
      </IntrodSection>
    </>
  );
};

export { PurchaseCard, PurchaseBtn };
