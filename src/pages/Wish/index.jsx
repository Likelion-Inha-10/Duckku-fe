import React, { useState } from "react";
import Button from "../../duckku-ui/Button";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import styled from "styled-components";
import Typography from "../../duckku-ui/Typography";
import { AiFillHeart } from "react-icons/ai";

const AllWishWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WishContain = styled.div`
  width: 154px;
  height: 273px;
`;

const WishImage = styled.div`
  width: 154px;
  height: 220px;
  border-radius: 10% 10% 10% 10%;
  background-color: gray;
  background-image: url(${(props) => (props.Img ? props.Img : "none")});
  background-position: center;
  background-size: cover;
`;

const WishImageWrraper = styled.div`
  width: 154px;
  height: auto;
  display: flex;
  justify-content: end;
`;

const HeartSection = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  margin-right: 10px;
  margin-top: 5px;
  opacity: 90%;
  position: absolute;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: red;
`;

const SingInfoWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Wish = () => {
  return (
    <Layout>
      <AllWishWrapper>
        <Header back title=" 찜한 앨범" />
        <Margin width="300" height="30" />
        <WishContain>
          <WishImageWrraper>
            <HeartSection>
              <AiFillHeart />
            </HeartSection>
            <WishImage Img="https://i.pinimg.com/736x/8a/67/57/8a675780020a8172d765b3c0e8b19c26.jpg" />
          </WishImageWrraper>
          <Typography bold16>More and More</Typography>
          <SingInfoWrapper>
            <Typography regular16>트와이스</Typography>
            <Typography regular16>2022</Typography>
          </SingInfoWrapper>
        </WishContain>
        <Margin width="15" height="220" />
        <WishContain>
          <WishImageWrraper>
            <HeartSection>
              <AiFillHeart />
            </HeartSection>
            <WishImage Img="https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg" />
          </WishImageWrraper>
          <Typography bold16>More and More</Typography>
          <SingInfoWrapper>
            <Typography regular16>트와이스</Typography>
            <Typography regular16>2022</Typography>
          </SingInfoWrapper>
        </WishContain>

        <Margin width="300" height="30" />
        <WishContain>
          <WishImageWrraper>
            <HeartSection>
              <AiFillHeart />
            </HeartSection>
            <WishImage Img="https://images.genius.com/bfdf3da954dc9937c0e2bac2ea124576.1000x1000x1.png" />
          </WishImageWrraper>
          <Typography bold16>More and More</Typography>
          <SingInfoWrapper>
            <Typography regular16>트와이스</Typography>
            <Typography regular16>TT</Typography>
          </SingInfoWrapper>
        </WishContain>
        <Margin width="10" height="220" />
        <WishContain>
          <WishImageWrraper>
            <HeartSection>
              <AiFillHeart />
            </HeartSection>
            <WishImage Img="https://blogger.googleusercontent.com/img/a/AVvXsEgc5SNyrAlpMMg4ovzxpIeYf6bk8uqdWhGLYOeKIpj-lhHXxmOXDrqFCc-RrkpIyGpbqovo3aTZ5jbb_PMOuGzQLcEpO7Nkzn61oSl9xqJLB8bmnrvieq9tD5qO4_LMpecp3r1d_ICjf62eul-cryA9IVYRo-dSN_5TniWYCYePgaDdedOmwrqV62Ix=w640-h568" />
          </WishImageWrraper>
          <Typography bold16>More and More</Typography>
          <SingInfoWrapper>
            <Typography regular16>트와이스</Typography>
            <Typography regular16>Cheer</Typography>
          </SingInfoWrapper>
        </WishContain>
      </AllWishWrapper>
    </Layout>
  );
};

export default Wish;
