import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mt-5">What Our Customers are Saying About Us</h2>
      </div>
      <div className="testimonial-card mx-auto shadow p-4">
        <div className="testimonial-content">
          <p>
            "This product saved me so much time and money! I highly recommend
            it."
          </p>
        </div>
        <div className="testimonial-author mt-4 d-flex align-items-center">
          {/* <img
            // src="https://placeimg.com/100/100/people"
            alt="Jane Doe"
            className="rounded-circle mr-3"
          /> */}
          <div className="author-details">
            <h4 className="mb-0">Jane Doe</h4>
            <p className="text-muted">CEO, XYZ Company</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
