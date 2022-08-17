import React, { useState, useEffect } from "react";
import Album from "../../duckku-ui/Album";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import styled from "styled-components";
import SortMenu from "../../duckku-ui/SortMenu";
import { AiOutlineDown } from "react-icons/ai";

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
  const [interestedList, setInterestedList] = useState([
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: true,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: true,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
    {
      imgLink: "https://image.yes24.com/goods/71935476/XL",
      albumTitle: "Fancy",
      artist: "TWICE",
      year: "2022",
      isChecked: false,
    },
  ]);

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
  );
};

export default Interested;
