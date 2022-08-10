import React from "react";
import { Link } from "react-router-dom";

const ContactBody = () => {
  return (
    <div className="w-75 mx-auto mt-5 mb-5">
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
        <label for="floatingTextarea">Comments</label>
      </div>
      <Link to="/cart" className="w-25 mx-auto btn btn-warning mt-3">
        Submit
      </Link>
    </div>
  );
};

export default ContactBody;
