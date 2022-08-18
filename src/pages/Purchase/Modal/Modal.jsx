import React from "react";
import "./modal.css";
import Button from "../../../duckku-ui/Button";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const { open, close } = props;

  const navigate = useNavigate();
  const onClickPurchase = () => {
    navigate(-1);
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
