import React from "react";

const Services = () => {
  return (
    <section>
      <h2 className="w-50  mb-3 mt-4 text-center mx-auto"> Our Services</h2>
      <div className="container w-75 mx-auto g-3">
        <hr />
        <div className="text-center">
          We provide high quality food items delivered within short time.
        </div>
        <hr />

        <div className="d-flex row container g-3 mx-auto mt-4">
          <div
            className="card mb-3 col-md-4"
            style={{ backgroundColor: "#E8DBB7" }}
          >
            <h5 className="card-title">Indoor Catering</h5>
            <p className="card-text">
              We provide variety of meals that can be delivered to your
              doorstep.
            </p>
          </div>
          <div
            className="card mb-3 col-md-4 "
            style={{ backgroundColor: "#E8DBB7" }}
          >
            <h5 className="card-title">Outdoor Catering Services</h5>
            <p className="card-text">
              We can cater for your events treating your guests to well
              prepared, sumptious meals.
            </p>
          </div>
          <div
            className="card mb-3 col-md-4"
            style={{ backgroundColor: "#E8DBB7" }}
          >
            <h5 className="card-title">Training School</h5>
            <p className="card-text">
              We provide hands on cullinary training to students who will like
              to improve their skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
