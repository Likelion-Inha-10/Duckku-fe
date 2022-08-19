import React, { useState, useEffect } from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { PurchaseCard, PurchaseBtn } from "./components/PurchaseCard";
import SingList from "./components/SingList";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: hidden;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 56px;
`;

const TrackWrapper = styled.div`
  width: 80%;
  height: auto;
`;

const ListsMap = (props) => {
  return props.Lists.map((v) => (
    <SingList
      key={v.music_name}
      Num={props.Lists.indexOf(v) + 1}
      SingName={v.music_name}
      SingTime={v.play_time}
    />
  ));
};

const Purchase = () => {
  const { albumId } = useParams();

  const [Name, setName] = useState("");
  const [Img, setImg] = useState("");
  const [Singer, setSinger] = useState("");
  const [MusicList, setMusicList] = useState([]);

  useEffect(() => {
    console.log(albumId);
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/show_album_info/${albumId}`)
      .then((response) => {
        setName(response.data.name);
        setImg(response.data.album_image);
        setSinger(response.data.artist_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/album_music_list_info/${albumId}`)
      .then((response) => {
        setMusicList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <Header zIndex="10" back title="   앨범 구매하기" />
          <AllWrapper>
            <PurchaseCard Img={Img} SingName={Name} SingerName={Singer} />
            <Margin width="390" height="50" />

            <TrackWrapper>
              <Typography bold16>수록곡</Typography>

              <ListsMap Lists={MusicList} />
            </TrackWrapper>
            <Margin width="300px" height="130" />
          </AllWrapper>
          <PurchaseBtn />
        </Layout>
      </motion.div>
    </>
  );
};

export default Purchase;
