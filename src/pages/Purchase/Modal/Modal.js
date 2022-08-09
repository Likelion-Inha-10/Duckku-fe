import React from "react";
import "./modal.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Typography from "../../../duckku-ui/Typography";

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>{props.children}</main>

          <footer>
            <button className="close" onClick={close}>
              <IoIosArrowForward />
              <IoIosArrowForward />
              등록된 결제 수단으로 결제하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
