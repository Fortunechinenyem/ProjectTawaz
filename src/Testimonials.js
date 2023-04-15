import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mt-5">What Our Customers are Saying About Us</h2>
      </div>
      <div
        className="testimonial-card mx-auto "
        style={{ backgroundColor: "#E8DBB7" }}
      >
        <div className="testimonial-content">
          <p>
            "This product saved me so much time and money! I highly recommend
            it."
          </p>
        </div>
        <div className="testimonial-author">
          <img src="https://placeimg.com/100/100/people" alt="Jane Doe" />
          <div className="author-details">
            <h4>Jane Doe</h4>
            <p>CEO, XYZ Company</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
