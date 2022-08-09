import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import InputBox from "./components/inputBox";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import Flex from "../../duckku-ui/Flex";
import OptionButton from "./components/optionButton";
import ArtistButton from "./components/artistButton";

const TitleBox = styled.div`
  width: 320px;
  padding-left: 10px;
`;

const OptionSlider = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const OptionButtonWrapper = styled.div`
  width: fit-content;
  margin-left: 27px;
  margin-right: 27px;
`;

const ArtistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 336px;
  height: 55vh;
  overflow-x: hidden;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
`;

const ArtistSelect = () => {
  const [artistNumber, setArtistNumber] = useState(0);

  const [agencies, setAgencies] = useState([
    { key: "HYBE", selected: false },
    { key: "SM", selected: false },
    { key: "YG", selected: false },
    { key: "JYP", selected: false },
    { key: "울림", selected: false },
    { key: "젤리피쉬", selected: false },
    { key: "CUBE", selected: false },
    { key: "FNC", selected: false },
  ]);

  const [artists, setArtists] = useState([
    {
      key: "TWICE",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "소녀시대",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "슈퍼주니어",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "EXO",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "NCT",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "레드벨벳",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "샤이니",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "청하",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "아이유",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "스트레이키즈",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "BTS",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
  ]);

  const [optionButtons, setOptionButtons] = useState();
  const [artistButtons, setArtistButtons] = useState();

  useEffect(() => {
    const onAgencyClick = (e) => {
      console.log(e.target.name);
      setAgencies(
        agencies.map((agency) => {
          if (agency.key === e.target.name) {
            if (agency.selected) return { ...agency, selected: false };
            return { ...agency, selected: true };
          }
          return { ...agency, selected: false };
        })
      );
    };

    setOptionButtons(
      agencies.map((agency) => (
        <OptionButton
          key={agency.key}
          name={agency.key}
          activated={agency.selected}
          onClick={onAgencyClick}
        >
          {agency.key}
        </OptionButton>
      ))
    );
  }, [agencies]);

  useEffect(() => {
    const onArtistClick = (e) => {
      console.log(e.key);
      setArtists(
        artists.map((artist) => {
          if (artist.key === e.key) {
            if (artist.selected) return { ...artist, selected: false };
            return { ...artist, selected: true };
          }
          return { ...artist };
        })
      );
    };

    setArtistButtons(
      artists.map((artist) => (
        <ArtistButton
          key={artist.key}
          artistName={artist.key}
          activated={artist.selected}
          color={artist.color}
          link={artist.link}
          onClick={() => onArtistClick(artist)}
        />
      ))
    );

    let counter = 0;
    artists.map((artist) => {
      if (artist.selected === true) counter++;
      return 0;
    });
    setArtistNumber(counter);
  }, [artists]);

  return (
    <Layout>
      <Header back title="아티스트 설정" />
      <Margin height="32" />
      <TitleBox>
        <Flex direction="column" justify="left">
          <Typography bold21>
            좋아하는 아티스트를
            <br />
            선택해주세요.
          </Typography>
        </Flex>
      </TitleBox>
      <Margin height="30" />
      <InputBox placeholder="아티스트 검색" />
      <Margin height="21" />
      <OptionSlider>
        <OptionButtonWrapper>
          <Flex direction="row">{optionButtons}</Flex>
        </OptionButtonWrapper>
      </OptionSlider>
      <Margin height="32" />
      <ArtistWrapper>{artistButtons}</ArtistWrapper>
      <ButtonWrapper>
        <Button backgroundColor={artistNumber === 0 ? "gray" : "main"}>
          {artistNumber === 0
            ? "아티스트 선택하기"
            : artistNumber + "명의 아티스트 선택"}
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default ArtistSelect;
