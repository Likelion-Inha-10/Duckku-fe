import styled from "styled-components";
import Button from "../../duckku-ui/Button";
import Layout from "../../duckku-ui/Layout";
import Header from "../../duckku-ui/Header";
import Typography from "../../duckku-ui/Typography";
import Margin from "../../duckku-ui/Margin";
import ArtistCard from "./components/artistCard";
import Toast from "../../duckku-ui/Toast";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  z-index: 10;
`;

const TitleWrapper = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const PencilButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  width: 310px;
  z-index: 20;
  display: flex;
  justify-content: right;
`;

const ModalButtonWrapper = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 86px;
  background: #ffffff;
  border: 1px solid #afafaf;
  border-radius: 8px;
`;

const ModalInsideButton = styled.div`
  width: fit-content;
  background: none;
  border: none;
  cursor: pointer;
`;

const ArtistCardWrapper = styled.div`
  width: 328px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-top: 172px;
  padding-bottom: 144px;
  position: absolute;
  top: 0;
  z-index: 0;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
  const [isPencilbuttonClicked, setIsPencilButtonClicked] = useState(false);
  const [isDeleteModeActivated, setIsDeleteModeActivated] = useState(false);
  const [artistCards, setArtistCards] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`${process.env.REACT_APP_API}/my_artist_list/${id}`)
      .then((response) => {
        console.log(response);
        const artistArray = [];
        let counter = 1;
        response.data.map((artist) => {
          artistArray.push({
            id: `${counter}`,
            key: artist.id,
            deleted: false,
            artistName: artist.artist_name,
            date: "2022.08.20",
            imgLink: artist.artist_image,
          });
          counter += 1;
        });
        setArtistCards(artistArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const onClickAdd = () => {
    Toast("현재 아티스트를 추가할 수 없습니다.");
  };

  const handleChange = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = [...artistCards];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setArtistCards(items);
  };

  const changePencilButtonState = () => {
    if (isDeleteModeActivated === false) {
      console.log("바뀐다!!");
      setIsPencilButtonClicked(!isPencilbuttonClicked);
    }
  };

  const setDeleteState = (e) => {
    console.log(e);
    const allLength = Object.keys(artistCards).length;
    const deletedLength = Object.keys(
      artistCards.filter((artist) => {
        if (artist.deleted === true) {
          return artist;
        }
        return 0;
      })
    ).length;
    if (allLength - deletedLength === 2) {
      Toast("최소 2명의 아티스트가 필요합니다.");
    } else {
      setArtistCards(
        artistCards.map((artist) => {
          if (artist.artistName === e) {
            return { ...artist, deleted: true };
          }
          return { ...artist };
        })
      );
    }
  };

  const activateDeleteMode = () => {
    setIsPencilButtonClicked(true);
    setIsDeleteModeActivated(true);
  };

  const onComfirm = () => {
    const id = localStorage.getItem("id");

    if (isDeleteModeActivated === true) {
      setIsPencilButtonClicked(false);
      setIsDeleteModeActivated(false);
      let subArray = [];
      artistCards.map((artist) => {
        if (artist.deleted === true) {
          subArray.push(artist.key);
        }
      });
      console.log(subArray);
      axios
        .delete(`${process.env.REACT_APP_API}/sub_artist/${id}`, {
          artists: subArray,
        })
        .then((response) => {
          console.log(response);
          Toast("삭제가 완료되었습니다");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Toast("완료되었습니다");
      setTimeout(1000);
      navigate(-1);
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <Layout>
          <TopWrapper>
            <Header back title="나의 관심 아티스트" zIndex="20" />
            <Margin height="26" />
            <TitleWrapper>
              <Typography bold24 color="headerText">
                총 {Object.keys(artistCards).length}명의 아티스트
              </Typography>
              <PencilButton onClick={changePencilButtonState}>
                <BsPencilSquare
                  size="24px"
                  color={isPencilbuttonClicked === false ? "black" : "#AFAFAF"}
                />
              </PencilButton>
            </TitleWrapper>
          </TopWrapper>
          <ModalWrapper>
            <ModalButtonWrapper
              active={
                isPencilbuttonClicked === true &&
                isDeleteModeActivated === false
              }
            >
              <ModalInsideButton onClick={() => onClickAdd()}>
                <Typography bold16>추가하기</Typography>
              </ModalInsideButton>
              <Margin height="10" />
              <ModalInsideButton onClick={activateDeleteMode}>
                <Typography bold16>제거하기</Typography>
              </ModalInsideButton>
            </ModalButtonWrapper>
          </ModalWrapper>
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
                    {artistCards.map(
                      ({ id, deleted, artistName, date, imgLink }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              style={getItemStyle(
                                provided.draggableProps.style
                              )}
                            >
                              <ArtistCard
                                id={index + 1}
                                deleted={deleted}
                                activate={isDeleteModeActivated}
                                artistName={artistName}
                                date={date}
                                imgLink={imgLink}
                                setDeleteState={setDeleteState}
                              />
                            </div>
                          )}
                        </Draggable>
                      )
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </ArtistCardWrapper>
          <ButtonWrapper>
            <Button width="350" height="68" onClick={onComfirm}>
              <Typography bold24 color="white">
                {isDeleteModeActivated ? "삭제 완료" : "완료"}
              </Typography>
            </Button>
          </ButtonWrapper>
        </Layout>
      </motion.div>
    </>
  );
};

export default FavoriteArtist;
