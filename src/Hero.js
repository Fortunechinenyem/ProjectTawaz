import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="homehero ">
        <div className="">
          <div className="">
            <h1>Tawaz Tasty Treats</h1>
            <h3>Chop life, it's meant to be chopped!!</h3>
            <div className=" d-flex container row g-2">
              <Link to="/menu" className="btn btn-warning mt-4">
                View Menu
              </Link>
              <a href="https://wa.link/o688gi" className="btn btn-warning">
                Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
