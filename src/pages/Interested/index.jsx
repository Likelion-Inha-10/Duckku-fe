import React, { useState, useEffect } from "react";
import Album from "../../duckku-ui/Album";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import styled from "styled-components";
import SortMenu from "../../duckku-ui/SortMenu";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import axios from "axios";

const AllInterestedWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ViewOrderWrapper = styled.div`
  width: 326px;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 16px;
`;

const IconCenter = styled.div`
  width: auto;
  height: auto;
  margin-top: 5px;
`;

const Interested = () => {
  const [interestedAlbum, setInterestedAlbum] = useState();
  const [interestedList, setInterestedList] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(
        `${process.env.REACT_APP_API}/my_artist_list/show_album_list/sort_popular/${id}`
      )
      .then((response) => {
        console.log(response);
        let albumArray = [];
        response.data.map((album) => {
          albumArray.push({
            imgLink: album.album_image,
            albumTitle: album.name,
            artist: album.artist_name,
            year: album.created_at,
            isChecked: false,
          });
        });
        setInterestedList(albumArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setInterestedAlbum(
      interestedList.map((album) => (
        <Album
          imgLink={album.imgLink}
          albumTitle={album.albumTitle}
          artist={album.artist}
          year={album.year}
          isChecked={album.isChecked}
        />
      ))
    );
  }, [interestedList]);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <AllInterestedWrapper>
            <Header back title=" 나의 관심 아티스트의 앨범" />

            <ViewOrderWrapper>
              <Margin height="32" />
              <SortMenu />
            </ViewOrderWrapper>
            <Margin height="16" />
            {interestedAlbum}
          </AllInterestedWrapper>
        </Layout>
      </motion.div>
    </>
  );
};

export default Interested;
