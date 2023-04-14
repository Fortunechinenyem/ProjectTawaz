import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="text-center">
        <h2>Testiomonials</h2>
      </div>
      <div className="testimonial-card mx-auto ">
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
