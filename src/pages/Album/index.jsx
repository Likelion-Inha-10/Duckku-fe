import React, { useState } from "react";
import Layout from "../../duckku-ui/Layout/index";
import MainPhoto from "./components/MainPhoto";
import Header from "../../duckku-ui/ResponsiveHeader/index";
import Category from "./components/Category";
import Margin from "../../duckku-ui/Margin";
import Contents from "./components/Contents";

const Album = () => {
  const categories = ["앨범", "포토카드", "응모권"];
  const [clickCategory, setClickCategory] = useState(categories[0]);

  return (
    <>
      <Layout>
        <Header back />

        <MainPhoto></MainPhoto>
        <Margin height="30" />

        <Category
          categories={categories}
          clickCategory={clickCategory}
          setClickCategory={setClickCategory}
        />
        <Margin height="30" />

        <Contents
          categories={categories}
          clickCategory={clickCategory}
          setClickCategory={setClickCategory}
        />
      </Layout>
    </>
  );
};

export default Album;
