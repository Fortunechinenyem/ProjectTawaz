import React from "react";
// import Modal from "../Modal";

const isDesktop = () => {
  return window.innerWidth > 768;
};

const redirectWhatsApp = () => {
  window.location.href = "https://wa.link/o688gi";
};

if (isDesktop()) {
  redirectWhatsApp();
}

function LandingPage() {
  return (
    <div className="landingpage vh-100">
      <div className="text-center">{/* <Modal /> */}</div>
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
  );
}

export default LandingPage;
