import React from "react";
import ReactDOM from "react-dom";

const isDesktop = () => {
  return window.innerWidth > 768;
};

const redirectWhatsApp = () => {
  window.location.href = "https://wa.link/o688gi";
};

if (isDesktop()) {
  redirectWhatsApp();
}

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal d-flex align-items-center justify-content-center ">
      <div className="modal-content">
        <div className=" text-center">
          <h4 className="mb-4 mt-4">
            Delicious and nutritious meals just a click away.
          </h4>
          <button onClick={redirectWhatsApp} className="button mb-4">
            Order Now
          </button>
          <p>Or call us at: +2348071715005</p>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
