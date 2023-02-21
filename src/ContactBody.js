import React from "react";

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
      <div className="w-75 text-center mx-auto">
        <a href="https://wa.link/o688gi" className="btn btn-warning mt-3">
          Submit
        </a>
      </div>
    </div>
  );
};

export default ContactBody;
