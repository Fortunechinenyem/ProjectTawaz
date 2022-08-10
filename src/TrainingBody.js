import React from "react";
import { Link } from "react-router-dom";

const TrainingBody = () => {
  return (
    <div className="w-75 mx-auto mt-5 mb-5">
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
        <input type="phonenumber" className="form-control" id="floatingInput" />
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
      <Link to="/contact" className="btn btn-warning mt-3">
        Submit
      </Link>
    </div>
  );
};

export default TrainingBody;