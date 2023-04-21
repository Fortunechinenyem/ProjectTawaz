import React, { useEffect } from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function LandingPage() {
  useEffect(() => {
    const header = document.querySelector(".landingpage h1");
    const intervalId = setInterval(() => {
      header.style.color = getRandomColor();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  const isDesktop = () => {
    return window.innerWidth > 768;
  };

  const redirectWhatsApp = () => {
    window.location.href = "https://wa.link/o688gi";
  };

  if (isDesktop()) {
    redirectWhatsApp();
  }

  return (
    <div className="landingpage container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="mb-4">Tawas Tasty Treats</h1>
        <h4 className="mb-4">
          Delicious and nutritious meals just a click away.
        </h4>
        <button onClick={redirectWhatsApp} className="btn btn-warning mb-4">
          Order Now
        </button>
        <p>Or call us at: +2348071715005</p>
      </div>
    </div>
  );
}

export default LandingPage;
