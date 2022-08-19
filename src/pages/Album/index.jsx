import React, { useState, useEffect } from "react";
import Layout from "../../duckku-ui/Layout/index";
import MainPhoto from "./components/MainPhoto";
import Header from "../../duckku-ui/ResponsiveHeader/index";
import Category from "./components/Category";
import Margin from "../../duckku-ui/Margin";
import Contents from "./components/Contents";
import axios from "axios";
import PhotoQr from "../ModalQrTest/PhotoQr";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const Album = () => {
  const categories = ["앨범", "포토카드", "응모권"];
  const [clickCategory, setClickCategory] = useState(categories[0]);
  const [data, setData] = useState({}); //골라진 아티스트 정보
  const [albums, setAlbums] = useState([]); //해당 아티스트가 갖고있는 앨범들
  const [ticket, setTicket] = useState(); //해당 아티스트에 갖고있는 응모권
  const [photo, setPhoto] = useState([]); //해당 아티스트의 포토카드들

  const { artistId } = useParams();
  let artists = [];
  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_API}/${artistId}/buy_album_list/${id}`)
      .then((r) => {
        axios
          .get(`${process.env.REACT_APP_API}/show_all_artist_info`)
          .then((r) => {
            artists = r.data;
            for (let a of artists) {
              if (a.id == artistId) {
                setData(a);
              }
            }
          });

        axios
          .get(`${process.env.REACT_APP_API}/get_all_purchased_albums/${id}`)
          .then((r) => {
            console.log(r);
            setAlbums(r.data);
          });

        //포카
        axios
          .get(
            `${process.env.REACT_APP_API}/${artistId}/buy_photo_card_list/${id}`
          )
          .then((r) => {
            console.log(r);
            setPhoto(r.data);
          });
        //티켓
        axios
          .get(
            `${process.env.REACT_APP_API}/${artistId}/buy_ticket_count/${id}`
          )
          .then((r) => {
            setTicket(r.data.tickets_count);
          });
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
          <Header back />

          <MainPhoto
            data={data}
            albums={albums}
            clickCategory={clickCategory}
          ></MainPhoto>
          <Margin height="30" />

          <Category
            categories={categories}
            clickCategory={clickCategory}
            setClickCategory={setClickCategory}
          />
          <Margin height="30" />

          <Contents
            data={data}
            photo={photo}
            ticket={ticket}
            albums={albums}
            categories={categories}
            clickCategory={clickCategory}
          />
        </Layout>
      </motion.div>
    </>
  );
};

export default Album;
