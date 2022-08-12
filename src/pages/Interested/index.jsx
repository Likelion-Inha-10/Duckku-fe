import React from "react";
import Header from "../../duckku-ui/Header";
import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import styled from "styled-components";
import InterestedCard from "./components/InterestedCard";
import { AiOutlineDown } from "react-icons/ai";

const AllInterestedWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ViewOrderWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: end;
  margin: 5px;
  align-items: center;
`;

const IconCenter = styled.div`
  width: auto;
  height: auto;
  margin-top: 5px;
`;

const Interested = () => {
  return (
    <Layout>
      <AllInterestedWrapper>
        <Header back title=" 나의 관심 아티스트의 앨범" />
        <Margin width="300" height="15" />
        <ViewOrderWrapper>
          <Margin width="10" height="10" />
          <Typography inline bold16 color="gray">
            최신순
          </Typography>
          <IconCenter>
            <Typography bold21 color="gray">
              <AiOutlineDown />
            </Typography>
          </IconCenter>
        </ViewOrderWrapper>
        <InterestedCard
          Img="https://i.pinimg.com/736x/8a/67/57/8a675780020a8172d765b3c0e8b19c26.jpg"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />

        <InterestedCard
          Img="https://upload.wikimedia.org/wikipedia/en/2/20/Iz%2AOne_-_Twelve_A.jpg"
          SingTitle="More and More"
          Singer="아이즈원"
          SingYear="2020"
        />

        <InterestedCard
          Img="https://images.genius.com/bfdf3da954dc9937c0e2bac2ea124576.1000x1000x1.png"
          SingTitle="More and More"
          Singer="레드벨벳"
          SingYear="2022"
        />

        <InterestedCard
          Img="https://blogger.googleusercontent.com/img/a/AVvXsEgc5SNyrAlpMMg4ovzxpIeYf6bk8uqdWhGLYOeKIpj-lhHXxmOXDrqFCc-RrkpIyGpbqovo3aTZ5jbb_PMOuGzQLcEpO7Nkzn61oSl9xqJLB8bmnrvieq9tD5qO4_LMpecp3r1d_ICjf62eul-cryA9IVYRo-dSN_5TniWYCYePgaDdedOmwrqV62Ix=w640-h568"
          SingTitle="More and More"
          Singer="블랙핑크"
          SingYear="2020"
        />

        <InterestedCard
          Img="https://images.genius.com/bfdf3da954dc9937c0e2bac2ea124576.1000x1000x1.png"
          SingTitle="More and More"
          Singer="방탄소년단"
          SingYear="2022"
        />

        <InterestedCard
          Img="https://blogger.googleusercontent.com/img/a/AVvXsEgc5SNyrAlpMMg4ovzxpIeYf6bk8uqdWhGLYOeKIpj-lhHXxmOXDrqFCc-RrkpIyGpbqovo3aTZ5jbb_PMOuGzQLcEpO7Nkzn61oSl9xqJLB8bmnrvieq9tD5qO4_LMpecp3r1d_ICjf62eul-cryA9IVYRo-dSN_5TniWYCYePgaDdedOmwrqV62Ix=w640-h568"
          SingTitle="More and More"
          Singer="트와이스"
          SingYear="2022"
        />
      </AllInterestedWrapper>
    </Layout>
  );
};

export default Interested;
