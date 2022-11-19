import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="abouthero ">
      <div className="">
        <div className="">
          <h1>Who We Are</h1>

          <Link to="/menu" className="btn btn-warning mt-4">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
