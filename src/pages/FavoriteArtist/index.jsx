import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Typography from "../../duckku-ui/Typography";
import Margin from "../../duckku-ui/Margin";
import ArtistCard from "./components/artistCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const TopWrapper = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const AddArtistButton = styled.div`
  width: fit-content;
  background: none;
  border: none;
  font-family: "Pretendard-Bold";
  font-size: 16px;
  font-weight: 700;
  color: #979797;
`;

const ArtistCardWrapper = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 124px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 56px;
  z-index: 10;
`;

const getItemStyle = (draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = () => ({
  display: "flex",
  flexWrap: "wrap",
  width: "344px",
  zIndex: "0",
});

const FavoriteArtist = () => {
  const [artistCards, setArtistCards] = useState([
    {
      id: "1",
      artistName: "레드벨벳",
      date: "2022.01.24",
      imgLink:
        "https://img7.yna.co.kr/etc/inner/KR/2019/12/24/AKR20191224038500005_01_i_P4.jpg",
    },
    {
      id: "2",
      artistName: "트와이스",
      date: "2022.01.24",
      imgLink:
        "https://images.chosun.com/resizer/uB6vnQh-PQORlwDuYYHC8NxvWm4=/530x742/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VDJKJKQEWSDFO3LJCKOIZTN5IA.jpg",
    },
    {
      id: "3",
      artistName: "아이브",
      date: "2022.01.24",
      imgLink:
        "https://cdn.ggilbo.com/news/photo/202112/884273_714154_1042.jpg",
    },
    {
      id: "4",
      artistName: "아이들",
      date: "2022.01.24",
      imgLink:
        "https://image.ajunews.com/content/image/2021/01/13/20210113100103775790.jpg",
    },
    {
      id: "5",
      artistName: "소녀시대",
      date: "2022.01.24",
      imgLink:
        "https://biz.chosun.com/resizer/hWv4Z8dawBQ0aR90Sv2ij_k_lZ4=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XNO57WRNL43O7KMGWOIKN533NI.jpg",
    },
    {
      id: "6",
      artistName: "BTS",
      date: "2022.01.24",
      imgLink: "https://pbs.twimg.com/media/EpU5qZuUUAI27rk.jpg:large",
    },
  ]);

  const handleChange = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = [...artistCards];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setArtistCards(items);
  };

  return (
    <Layout>
      <Header back title="나의 관심 아티스트" zIndex="20" />
      <Margin height="26" />
      <TopWrapper>
        <Typography bold24 color="headerText">
          총 4명의 아티스트
        </Typography>
        <AddArtistButton>+ 추가하기</AddArtistButton>
      </TopWrapper>
      <Margin height="16" />
      <ArtistCardWrapper>
        <DragDropContext onDragEnd={handleChange}>
          <Droppable droppableId="artistCards">
            {(provided) => (
              <div
                className="artistCards"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle()}
              >
                {artistCards.map(({ id, artistName, date, imgLink }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={getItemStyle(provided.draggableProps.style)}
                      >
                        <ArtistCard
                          id={index + 1}
                          artistName={artistName}
                          date={date}
                          imgLink={imgLink}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ArtistCardWrapper>
      <ButtonWrapper>
        <Button width="350" height="68">
          <Typography bold24 color="white">
            완료
          </Typography>
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default FavoriteArtist;
