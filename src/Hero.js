import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="homehero ">
        <div className="">
          <div className="">
            <h1>Tawaz</h1>
            <h3>Great Food, Great Taste!</h3>
            <Link to="/menu" className="btn btn-warning mt-4">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
