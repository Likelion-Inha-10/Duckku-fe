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
import axios from "axios";

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
    { key: "멋사", selected: false },
    { key: "HYBE", selected: false },
    { key: "SM", selected: false },
    { key: "YG", selected: false },
    { key: "JYP", selected: false },
    { key: "스타쉽", selected: false },
    { key: "큐브", selected: false },
    { key: "이담", selected: false },
  ]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let artistArray = [];

    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/show_all_artist_info`)
      .then((response) => {
        response.data.map((artist) => {
          artistArray.push({
            id: artist.id,
            key: artist.artist_name,
            agency: artist.agency,
            selected: false,
            link: process.env.REACT_APP_API + artist.artist_image,
            color: "gray",
          });
        });
        setArtists(artistArray);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(artistArray);
  }, []);

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
      function isArtistSame(element) {
        if (element.key === e.key) {
          return true;
        }
      }
      const artist = artists.find(isArtistSame);
      if (artistNumber + 1 === 5 && artist.selected === false) {
        return Toast("최대 5명까지만 선택이 가능합니다.");
      } else {
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
      }
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
    const id = localStorage.getItem("id");

    if (artistNumber === 0) {
      return Toast("아티스트를 선택해주세요");
    } else {
      let subArray = [];
      artists.map((artist) => {
        if (artist.selected === true) {
          subArray.push(artist.id);
        }
      });
      console.log({ artists: subArray });
      axios
        .get(`${process.env.REACT_APP_API}/userinfo/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .patch(`${process.env.REACT_APP_API}/sub_artist/${id}`, {
          artists: [1, 2, 3, 4, 5],
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
