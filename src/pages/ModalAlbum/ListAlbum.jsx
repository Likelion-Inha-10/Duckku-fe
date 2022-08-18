import React, { useState, useEffect } from "react";
import ModalAlbum from "./ModalAlbum";
import ImageCard from "../../duckku-ui/ImageCard";

const ListAlbum = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <ImageCard
        onClick={openModal}
        borderRadius="20"
        width="154"
        height="220"
        src={props.Photo}
      />
      <ModalAlbum
        open={modalOpen}
        close={closeModal}
        AlbumName={props.AlbumName}
        AlbumPhoto={props.Photo}
        AlbumNumber={props.AlbumNumber}
        MadeDate={props.MadeDate}
        Lists={props.Lists}
      ></ModalAlbum>
    </>
  );
};

export default ListAlbum;
