import React, { useEffect } from "react";
import "./modal.css";
import Button from "../../../duckku-ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Modal = (props) => {
  const { open, close } = props;

  const { albumId } = useParams();
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const onClickPurchase = () => {
    navigate(-1);
    console.log(id);
    console.log(props.withTicket);
    console.log(props.withNotTicket);
    axios
      .post(`${process.env.REACT_APP_API}/buy_albums/${albumId}/${id}`, {
        album_with_ticket: props.withTicket,
        album_without_ticket: props.withNotTicket,
      })
      .then((response) => {
        console.log(response);
        console.log("구매가 완료되었습니다.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={open ? "openModal modal" : "modal"} onClick={close}>
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
          <main>{props.children}</main>

          <footer>
            <Button className="close" onClick={() => onClickPurchase()}>
              바로구매
            </Button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
