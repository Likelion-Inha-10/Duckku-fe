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
import { motion } from "framer-motion";
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
    { key: "??????", selected: false },
    { key: "HYBE", selected: false },
    { key: "SM", selected: false },
    { key: "YG", selected: false },
    { key: "JYP", selected: false },
    { key: "?????????", selected: false },
    { key: "??????", selected: false },
    { key: "??????", selected: false },
  ]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let artistArray = [];

    axios
      .get(`${process.env.REACT_APP_API}/show_all_artist_info`)
      .then((response) => {
        response.data.map((artist) => {
          artistArray.push({
            id: artist.id,
            key: artist.artist_name,
            agency: artist.agency,
            selected: false,
            link: `${artist.artist_image}`,
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
        return Toast("?????? 5???????????? ????????? ???????????????.");
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
      console.log("?????? ?????? ??????");
      setArtistButtons(
        <NoResultWrapper>
          <Margin height="113" />
          <Typography regular16 color="gray">
            ???????????? ??????????????? ????????????
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
      return Toast("??????????????? ??????????????????");
    } else if (artistNumber === 1) {
      return Toast("?????? 2??? ????????? ??????????????????.");
    } else {
      let subArray = [];
      artists.map((artist) => {
        if (artist.selected === true) {
          subArray.push(artist.id);
        }
      });
      console.log({ artists: subArray });
      axios
        .patch(`${process.env.REACT_APP_API}/sub_artist/${id}`, {
          artists: subArray,
        })
        .then((response) => {
          navigate(`/main-home`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <TopWrapper>
            <Header back title="???????????? ??????" />
            <Margin height="23" />
            <TitleBox>
              <Flex direction="column" justify="left">
                <Typography bold21>
                  ???????????? ???????????????
                  <br />
                  ??????????????????.
                </Typography>
              </Flex>
            </TitleBox>
            <Margin height="30" />
            <InputBox
              placeholder="???????????? ??????"
              setSearchTerm={setSearchTerm}
            />
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
              backgroundColor={
                artistNumber === 0 || artistNumber === 1 ? "gray" : "main"
              }
              onClick={onConfirm}
            >
              {artistNumber === 0
                ? "???????????? ????????????"
                : artistNumber + "?????? ???????????? ??????"}
            </Button>
          </ButtonWrapper>
        </Layout>
      </motion.div>
    </>
  );
};

export default ArtistSelect;
