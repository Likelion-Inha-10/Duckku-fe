import React, { useState } from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import WishCard from "./components/WishCard";

const AllWishWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wish = () => {
  return (
    <Layout>
      <AllWishWrapper>
        <Header back title=" 찜한 앨범" />
        <Margin width="300" height="30" />

        <WishCard
          Img="https://i.pinimg.com/736x/8a/67/57/8a675780020a8172d765b3c0e8b19c26.jpg"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />
        <WishCard
          Img="https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />
        <WishCard
          Img="https://images.genius.com/bfdf3da954dc9937c0e2bac2ea124576.1000x1000x1.png"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />
        <WishCard
          Img="https://blogger.googleusercontent.com/img/a/AVvXsEgc5SNyrAlpMMg4ovzxpIeYf6bk8uqdWhGLYOeKIpj-lhHXxmOXDrqFCc-RrkpIyGpbqovo3aTZ5jbb_PMOuGzQLcEpO7Nkzn61oSl9xqJLB8bmnrvieq9tD5qO4_LMpecp3r1d_ICjf62eul-cryA9IVYRo-dSN_5TniWYCYePgaDdedOmwrqV62Ix=w640-h568"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />
      </AllWishWrapper>
    </Layout>
  );
};

export default Wish;
