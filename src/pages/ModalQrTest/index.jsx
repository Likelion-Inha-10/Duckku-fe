import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import PhotoQr from "./PhotoQr";
import ListAlbum from "../ModalAlbum/ListAlbum";

const ModalQrTest = () => {
  return (
    <>
      <Layout>
        <PhotoQr />
      </Layout>
    </>
  );
};

const ModalAlbumTest = () => {
  <>
    <Layout>
      <ListAlbum />
    </Layout>
  </>;
};

export default ModalAlbumTest;
