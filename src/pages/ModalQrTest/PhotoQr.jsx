import React, { useState } from "react";
import ModalQr from "./ModalQr";
import Button from "../../duckku-ui/Button";
import ImageCard from "../../duckku-ui/ImageCard";

const PhotoQr = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <ImageCard
        onClick={openModal}
        borderRadius="20"
        width="154"
        height="220"
        src={props.Photo}
      />
      <ModalQr
        open={modalOpen}
        close={closeModal}
        SingerName={props.SingerName}
        PhotoCard={props.Photo}
        RegistDay={props.RegistDay}
      ></ModalQr>
    </React.Fragment>
  );
};

export default PhotoQr;
