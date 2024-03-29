import React, { useState } from "react";

import TH from "./images/train.png";

const TrainingBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the email message from the form data
    const subject = "Training Inquiry";
    const body = `
    Full Name: ${formData.fullName}
    Email Address: ${formData.email}
    Phone Number: ${formData.phoneNumber}
    Reason to attend TCC Academy: ${formData.reason}
  `;
    const mailtoUrl = `mailto:sarahtawanyida@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Send the email using the mailto URL
    window.location.href = mailtoUrl;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="text-center">
      <div className="mt-3 mb-3  mx-auto">
        <img src={TH} alt={TrainingBody.jpg} className="shadow mx-auto" />
      </div>
      <div className=" mx-auto mt-5 mb-5 shadow p-5">
        <p className="lead">
          We hold your hands on your cullinary journey, giving top notch
          guidance that helps you stand out!
        </p>
        <form onSubmit={handleSubmit} className=" mx-auto mt-5 mb-5 shadow p-5">
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="phonenumber"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Leave a comment here"
            ></textarea>
            <label htmlFor="reason">
              Why do you want to attend Tawaz Tasty Treats Academy?
            </label>
          </div>
          <div className="w-75 text-center mx-auto">
            <button type="submit" className="button mt-3 shadow">
              Submit
            </button>
          </div>
        </form>
        {Object.values(formData).every((val) => val !== "") && (
          <table className="table mt-5 shadow">
            <tbody>
              <tr>
                <td>Full Name:</td>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{formData.phone}</td>
              </tr>
              <tr>
                <td>Comment:</td>
                <td>{formData.comment}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default TrainingBody;
