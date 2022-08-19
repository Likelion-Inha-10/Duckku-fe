import React, { Component } from "react";
import Slider from "react-slick";
import ArtistCard from "./artistCard";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { useNavigate } from "react-router-dom";

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CardCarousel = () => {
  const settings = {
    dots: true,
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

  const [artistList, setArtistList] = useState([]);
  const [artistCards, setArtistCards] = useState();
  const navigate = useNavigate();

  const moveToAlbum = (artist) => {
    navigate(`/album/${artist.key}`);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/my_artist_list/${id}`)
      .then((response) => {
        console.log(response.data);
        let artistArray = [];
        response.data.map((artist) => {
          artistArray.push({
            key: artist.id,
            artistid: artist.id,
            imgLink: artist.artist_image,
            iconLink: artist.logo_image,
            artistName: artist.artist_name,
            color1: artist.gradient_color_1,
            color2: artist.gradient_color_2,
          });
        });
        setArtistList(artistArray);
        console.log("캐로셀");
        console.log(artistArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setArtistCards(
      artistList.map((artist) => (
        <div onClick={() => moveToAlbum(artist)}>
          <ArtistCard
            key={artist.key}
            artistid={artist.artistid}
            imgLink={artist.imgLink}
            iconLink={artist.iconLink}
            artistName={artist.artistName}
            color1={artist.color1}
            color2={artist.color2}
            nClick={moveToAlbum}
          />
        </div>
      ))
    );
  }, [artistList]);

  return (
    <CarouselWrapper>
      <Slider {...settings}>{artistCards}</Slider>
    </CarouselWrapper>
  );
};

export default CardCarousel;

/*export default class CardCarousel extends Component {
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

    const [artistList, setArtistList] = useState([]);

    useEffect(() => {
      const id = localStorage.getItem("id");

      axios
        .get(`${process.env.REACT_APP_API}/my_artist_list/${id}`)
        .then((response) => {
          let artistArray = [];
          response.data[0].map((artist) => {
            artistArray.push({
              albumLink:
                "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/639/088/82639088_1653623843808_1_600x600.JPG/dims/resize/Q_80,0",
              iconLink:
                "http://file2.instiz.net/data/cached_img/upload/201507210/88367d0af857e0a6cd53aafbe1c15c49.jpg",
              albumName: "Face The Sun",
              artistName: "Seventeen",
              albumInfo: "정규 4집",
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

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
}*/
