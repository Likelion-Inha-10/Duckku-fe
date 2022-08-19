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

const Album = () => {
  const categories = ["앨범", "포토카드", "응모권"];
  const [clickCategory, setClickCategory] = useState(categories[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/userinfo/${id}`)
      .then((r) => console.log(r));
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
      </motion.div>
    </>
  );
};

export default Album;
