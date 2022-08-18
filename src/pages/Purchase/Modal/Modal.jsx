import React from "react";
import "./modal.css";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"} onClick={close}>
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
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
