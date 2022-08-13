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
        src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlS4ZL%2FbtqEBOHQQnj%2Fyv0m64q9UBZ6XIXkqQzbsK%2Fimg.jpg"
      />
      <ModalQr
        open={modalOpen}
        close={closeModal}
        SingerName="예리"
        PhotoCard="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlS4ZL%2FbtqEBOHQQnj%2Fyv0m64q9UBZ6XIXkqQzbsK%2Fimg.jpg"
        RegistDay="2022.02.01"
        SerialNumber="QWE1234"
      ></ModalQr>
    </React.Fragment>
  );
};

export default PhotoQr;
