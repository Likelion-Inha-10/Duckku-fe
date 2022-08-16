import React, { useState, useEffect } from "react";
import Layout from "../../duckku-ui/Layout/index";
import MainPhoto from "./components/MainPhoto";
import Header from "../../duckku-ui/ResponsiveHeader/index";
import Category from "./components/Category";
import Margin from "../../duckku-ui/Margin";
import Contents from "./components/Contents";
import axios from "axios";

const Album = () => {
  const categories = ["앨범", "포토카드", "응모권"];
  const [clickCategory, setClickCategory] = useState(categories[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((r) => setData(r.data));
  }, []);

  return (
    <>
      <Layout>
        <Header back />

        <MainPhoto data={data} clickCategory={clickCategory}></MainPhoto>
        <Margin height="30" />

        <Category
          categories={categories}
          clickCategory={clickCategory}
          setClickCategory={setClickCategory}
        />
        <Margin height="30" />

        <Contents
          data={data}
          categories={categories}
          clickCategory={clickCategory}
        />
      </Layout>
    </>
  );
};

export default Album;
