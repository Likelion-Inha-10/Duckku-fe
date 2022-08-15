import React, { Component } from "react";
import Slider from "react-slick";
import Margin from "../../../duckku-ui/Margin";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import Flex from "../../../duckku-ui/Flex";
import Typography from "../../../duckku-ui/Typography";
import { ReactComponent as RedCard } from "../../../assets/svgs/redCard.svg";
import { ReactComponent as OrangeCard } from "../../../assets/svgs/orangeCard.svg";
import { ReactComponent as GreenCard } from "../../../assets/svgs/greenCard.svg";
import { ReactComponent as BlackCard } from "../../../assets/svgs/blackCard.svg";

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 카드 내용 작성 랩
const CardTextWrapper = styled.div`
  width: 262px;
  padding-left: 14px;
  display: flex;
  flex-direction: column;
`;

export default class CardCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <CarouselWrapper>
        <Slider {...settings}>
          <CardContainer>
            <Margin height="61" />
            <Flex justify="center">
              <RedCard width="262" height="392" />
            </Flex>
            <Margin height="29" />
            <Flex justify="center">
              <CardTextWrapper>
                <Typography bold21>라이크라이언 마스터카드</Typography>
                <Margin height="5" />
                <Typography thin18 color="darkGray">
                  **** **** 1237 8607
                </Typography>
              </CardTextWrapper>
            </Flex>
          </CardContainer>
          <CardContainer>
            <Margin height="61" />
            <Flex justify="center">
              <OrangeCard width="262" height="392" />
            </Flex>
            <Margin height="29" />
            <Flex justify="center">
              <CardTextWrapper>
                <Typography bold21>라이크라이언 마스터카드</Typography>
                <Margin height="5" />
                <Typography thin18 color="darkGray">
                  **** **** 1237 8607
                </Typography>
              </CardTextWrapper>
            </Flex>
          </CardContainer>
          <CardContainer>
            <Margin height="61" />
            <Flex justify="center">
              <GreenCard width="262" height="392" />
            </Flex>
            <Margin height="29" />
            <Flex justify="center">
              <CardTextWrapper>
                <Typography bold21>라이크라이언 마스터카드</Typography>
                <Margin height="5" />
                <Typography thin18 color="darkGray">
                  **** **** 1237 8607
                </Typography>
              </CardTextWrapper>
            </Flex>
          </CardContainer>
          <CardContainer>
            <Margin height="61" />
            <Flex justify="center">
              <BlackCard width="262" height="392" />
            </Flex>
            <Margin height="29" />
            <Flex justify="center">
              <CardTextWrapper>
                <Typography bold21>라이크라이언 마스터카드</Typography>
                <Margin height="5" />
                <Typography thin18 color="darkGray">
                  **** **** 1237 8607
                </Typography>
              </CardTextWrapper>
            </Flex>
          </CardContainer>
        </Slider>
      </CarouselWrapper>
    );
  }
}
