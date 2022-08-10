import React from "react";

function FeaturedList() {
  return (
    <div className="feature w-100 ms-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title1 text-danger">Star Menu!</h4>
          <h5 className="card-title">Northern Delight</h5>
          <p className="card-text">
            We have a Variety of Northern Delicacies, customised specially for
            you.
          </p>
          <a href="mailto:sarahtawanyida@gmail.com" className="btn btn-warning">
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedList;
