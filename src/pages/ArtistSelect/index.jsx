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
import Toast from "../../duckku-ui/Toast";
import { useNavigate } from "react-router-dom";

const TopWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  align-items: baseline;
  width: 336px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  z-index: 0;
  padding-top: 318px;
  padding-bottom: 141px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const NoResultWrapper = styled.div`
  width: 336px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 56px;
`;

const ArtistSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAgency, setSearchAgency] = useState("");
  const [optionButtons, setOptionButtons] = useState();
  const [artistButtons, setArtistButtons] = useState();
  const [artistNumber, setArtistNumber] = useState(0);
  const [agencies, setAgencies] = useState([
    { key: "HYBE", selected: false },
    { key: "SM", selected: false },
    { key: "YG", selected: false },
    { key: "JYP", selected: false },
    { key: "MNH", selected: false },
    { key: "CUBE", selected: false },
    { key: "FNC", selected: false },
    { key: "이담", selected: false },
  ]);
  const [artists, setArtists] = useState([
    {
      key: "TWICE",
      agency: "JYP",
      selected: false,
      link: "https://img.hankyung.com/photo/202005/01.22706599.1.jpg",
      color: "gray",
    },
    {
      key: "소녀시대",
      agency: "SM",
      selected: false,
      link: "https://img.tvreportcdn.de/cms-content/uploads/2022/08/03/388f8818-8ba6-4778-9e75-12dc26fe3fa8.jpg",
      color: "gray",
    },
    {
      key: "블랙핑크",
      agency: "YG",
      selected: false,
      link: "https://image.newsis.com/2020/07/08/NISI20200708_0000559889_web.jpg",
      color: "gray",
    },
    {
      key: "ITZY",
      agency: "JYP",
      selected: false,
      link: "https://newsimg.sedaily.com/2020/02/21/1YZ0B7O55T_1.jpg",
      color: "gray",
    },
    {
      key: "G-IDLE(아이들)",
      agency: "CUBE",
      selected: false,
      link: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/51yc/image/9neOgksPZ3I15z46Jm69UtMscY8.jpg",
      color: "gray",
    },
    {
      key: "NCT",
      agency: "SM",
      selected: false,
      link: "https://img2.sbs.co.kr/img/sbs_cms/WE/2022/01/18/dkj1642471997361.jpg",
      color: "gray",
    },
    {
      key: "레드벨벳",
      agency: "SM",
      selected: false,
      link: "https://img.hankyung.com/photo/202203/01.29355639.1.jpg",
      color: "gray",
    },
    {
      key: "세븐틴",
      agency: "HYBE",
      selected: false,
      link: "https://pbs.twimg.com/media/FTwRkHkUcAA0nAn.jpg:large",
      color: "gray",
    },
    {
      key: "청하",
      agency: "MNH",
      selected: false,
      link: "https://t1.daumcdn.net/cfile/tistory/99C95A455C7C9C2F14",
      color: "gray",
    },
    {
      key: "아이유",
      agency: "이담",
      selected: false,
      link: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/05/17/b41ab909-e0e2-40e8-a36a-4bae809a9024.jpg",
      color: "gray",
    },
    {
      key: "스트레이키즈",
      agency: "JYP",
      selected: false,
      link: "https://cdn.mhnse.com/news/photo/202203/98702_81201_5250.jpg",
      color: "gray",
    },
    {
      key: "BTS",
      agency: "HYBE",
      selected: false,
      link: "https://img.hankyung.com/photo/202201/PYH2021122404020000500_P4.jpg",
      color: "gray",
    },
  ]);

  useEffect(() => {
    const onAgencyClick = (e) => {
      console.log(e.target.name);
      setAgencies(
        agencies.map((agency) => {
          if (agency.key === e.target.name) {
            if (agency.selected) {
              setSearchAgency("");
              return { ...agency, selected: false };
            }
            setSearchAgency(e.target.name);
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

    const filteredArtist = artists
      .filter((artist) => {
        if (searchTerm === "") {
          return artist;
        } else if (
          artist.key.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return artist;
        }
        return 0;
      })
      .filter((artist) => {
        if (searchAgency === "") {
          return artist;
        } else if (
          artist.agency.toLowerCase().includes(searchAgency.toLowerCase())
        ) {
          return artist;
        }
        return 0;
      });

    if (Object.keys(filteredArtist).length === 0) {
      console.log("검색 결과 없음");
      setArtistButtons(
        <NoResultWrapper>
          <Margin height="113" />
          <Typography regular16 color="gray">
            해당하는 검색결과가 없습니다
          </Typography>
        </NoResultWrapper>
      );
    } else {
      setArtistButtons(
        filteredArtist.map((artist) => (
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
    }

    let counter = 0;
    artists.map((artist) => {
      if (artist.selected === true) counter++;
      return 0;
    });
    setArtistNumber(counter);
  }, [searchTerm, searchAgency, artists, agencies]);

  const navigate = useNavigate();

  const onConfirm = () => {
    if (artistNumber === 0) {
      return Toast("아티스트를 선택해주세요");
    }
    navigate(`/main-home`);
  };

  return (
    <Layout>
      <TopWrapper>
        <Header back title="아티스트 설정" />
        <Margin height="23" />
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
        <InputBox placeholder="아티스트 검색" setSearchTerm={setSearchTerm} />
        <Margin height="21" />
        <OptionSlider>
          <OptionButtonWrapper>
            <Flex direction="row">{optionButtons}</Flex>
          </OptionButtonWrapper>
        </OptionSlider>
        <Margin height="32" />
      </TopWrapper>
      <ArtistWrapper>{artistButtons}</ArtistWrapper>
      <ButtonWrapper>
        <Button
          backgroundColor={artistNumber === 0 ? "gray" : "main"}
          onClick={onConfirm}
        >
          {artistNumber === 0
            ? "아티스트 선택하기"
            : artistNumber + "명의 아티스트 선택"}
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default ArtistSelect;
