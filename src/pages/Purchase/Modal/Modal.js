import React from "react";
import "./modal.css";
import { NavLink } from "react-router-dom";
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
              바로구매
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
