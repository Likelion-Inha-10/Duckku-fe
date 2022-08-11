import React, { Component } from "react";
import Slider from "react-slick";
import ArtistCard from "./artistCard";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

const CarouselWrapper = styled.div`
  width: 100%;
`;

export default class CardCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      appendDots: (dots) => (
        <div
          style={{
            width: "fit-content",
            marginLeft: "44px",
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
      dotsClass: "dots_custom",
    };

    return (
      <CarouselWrapper>
        <Slider {...settings}>
          <ArtistCard
            imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
            iconLink="https://kkukowiki.kr/images/e/e0/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%A1%9C%EA%B3%A0.png"
          />
          <ArtistCard
            imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
            iconLink="https://kkukowiki.kr/images/e/e0/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%A1%9C%EA%B3%A0.png"
          />
          <ArtistCard
            imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
            iconLink="https://kkukowiki.kr/images/e/e0/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%A1%9C%EA%B3%A0.png"
          />
          <ArtistCard
            imgLink="https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg"
            iconLink="https://kkukowiki.kr/images/e/e0/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%A1%9C%EA%B3%A0.png"
          />
        </Slider>
      </CarouselWrapper>
    );
  }
}
