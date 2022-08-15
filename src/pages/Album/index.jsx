import React, { useState } from "react";
import Layout from "../../duckku-ui/Layout/index";
import MainPhoto from "./components/MainPhoto";
import Header from "../../duckku-ui/Header/index";
import Category from "./components/Category";
import Margin from "../../duckku-ui/Margin";
import Contents from "./components/Contents";

const Album = () => {
  return (
    <>
      <Layout>
        <MainPhoto>
          <Header back />
        </MainPhoto>
        <Margin height="30" />

        <Category />
        <Margin height="30" />

        <Contents />
      </Layout>
    </>
  );
};

export default Album;
