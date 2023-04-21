import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MenuPrompt from "./MenuPrompt";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Hero() {
  useEffect(() => {
    const header = document.querySelector(".homehero h1");
    const intervalId = setInterval(() => {
      header.style.color = getRandomColor();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="homehero" style={{ margin: "40px 0" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center">
            <h1 style={{ marginBottom: "20px" }}>Tawas Tasty Treats</h1>
            <h3
              className="typewriter"
              style={{ color: "#FFF8EC", marginBottom: "40px" }}
            >
              Chop life, it's meant to be chopped!!
            </h3>
            <div className="d-flex row  col-md">
              <div>
                <Link to="/menu" className="button2">
                  Explore
                </Link>
              </div>
              <div>
                <MenuPrompt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
