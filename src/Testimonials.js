import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mt-5">What Our Customers are Saying About Us</h2>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="testimonial-card mx-auto shadow p-4">
            <div className="testimonial-content">
              <p>"Excellent customer Service."</p>
            </div>
            <div className="testimonial-author mt-4 d-flex align-items-center">
              <div className="author-details">
                <h4 className="mb-0">Zeruba Jane</h4>
                {/* <p className="text-muted">CEO, XYZ Company</p> */}
              </div>
            </div>
          </div>
          <div className="testimonial-card mx-auto shadow p-4">
            <div className="testimonial-content">
              <p>"Delicious is putting it mild!"</p>
            </div>
            <div className="testimonial-author mt-4 d-flex align-items-center">
              <div className="author-details">
                <h4 className="mb-0">Jane Zeruba</h4>
                {/* <p className="text-muted">CEO, XYZ Company</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
