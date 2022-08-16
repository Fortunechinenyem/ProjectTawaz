import React from "react";
import { Link } from "react-router-dom";
import TH from "./images/train.png";

const TrainingBody = () => {
  return (
    <section>
      <div className="mt-3 mb-3 w-75 mx-auto">
        <img src={TH} alt={TrainingBody.jpg} />
      </div>
      <div className="w-75 mx-auto mt-5 mb-5">
        <p>
          We hold your hands on your cullinary journey, giving top notch
          guidance that helps you stand out!
        </p>
        <div className="form-floating mb-3">
          <input type="name" className="form-control" id="floatingInput" />
          <label for="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="phonenumber"
            className="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Phone Number</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">
            Why do you want to attend TCC Academy?
          </label>
        </div>
        <div className="w-75 text-center mx-auto">
          <Link to="/contact" className="btn btn-warning mt-3">
            Submit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingBody;
