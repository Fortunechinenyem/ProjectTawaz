import React from "react";
import ABI from "./images/aboutimage.jpg";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <section>
      <div>
        <div className="card w-100 mx-auto mt-3 mb-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              We train students at the TCC cake academy
            </li>
            <li className="list-group-item">
              We make quality and affordable cakes and decorate them beautifully
              for all kinds of events
            </li>
            <li className="list-group-item">
              We also make pastries of all kinds, small chops, finger foods,
              with or without sugar/sweeteners to suit our clients desires
            </li>
            <li className="list-group-item">
              We make nutritional foods and drinks too including special natural
              drinks, smoothies,parfaits and the likes.
            </li>
            <li className="list-group-item">
              We also plan surprises for your loved ones for a token.
            </li>
          </ul>
        </div>
        <div className="card w-75 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Tawaz Training School</h5>
            <p className="card-text">
              The TCC cake academy trains on how to bake different cakes using
              more than just a recipe and how to frost and decorate them
              beautifully. Classes are also available for beginners who desire
              to learn catering and its economics.
            </p>
            <Link to="/training" className="btn btn-warning">
              Register
            </Link>
          </div>
        </div>

        <div className="card w-50 mx-auto mt-3 mb-3">
          <img src={ABI} className="card-img-top" alt={AboutBody.jpg} />
          <div className="card-body">
            <p className="card-text">Sarah Tawanyinda Ishaku</p>
            <h3 className="w-50 mb-3 mt-3 bg-warning text-center mx-auto">
              Head Chef
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBody;
