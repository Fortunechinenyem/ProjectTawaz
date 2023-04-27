import React, { useEffect } from "react";
import { TbMoodHappy } from "react-icons/tb";
import BestDealsMenu from "./BestDealsMenu";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function BestDeals() {
  useEffect(() => {
    const header = document.querySelector(".bestdeals h1");
    const intervalId = setInterval(() => {
      header.style.color = getRandomColor();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bestdeals" style={{ margin: "40px 0" }}>
      <div className="container">
        <div className=" justify-content-center align-items-center">
          <div className=" text-center">
            <h1 style={{ marginBottom: "20px" }}>
              Best Deals <TbMoodHappy />
            </h1>
            <div>
              <BestDealsMenu />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestDeals;
