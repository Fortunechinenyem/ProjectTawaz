import React from "react";
import ABI from "./images/aboutimage.jpg";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <section>
      <div className="text-center mt-3">
        <p>
          At Tawas Tasty Treats (TTT) we make quality and affordable cakes and
          decorate them beautifully for all kinds of events. We also make
          pastries of all kinds, small chops, finger foods, with or without
          sugar/sweeteners to suit our clients desires. We make nutritional
          foods and drinks too including special natural drinks, smoothies,
          yoghurt & cake parfaits and the likes. We also make special, premium
          northern foods,drinks,snacks,grills, finger foods and other delicacies
          to add spice to the northern food lovers in the western part of the
          country with our special northern delight packages. Tawas Tasty Treats
          also has an academy that trains and mentors students on how to bake
          different pastries and cakes using more than just a recipe and how to
          frost and decorate them beautifully. Classes are also available for
          beginners who desire to learn catering and its economics. Our delivery
          services are top notch as we deliver well and on time in order to
          satisfy our clients. We also plan surprises for your loved ones for a
          token. We pamper the taste buds of our target market with all the
          goodness that good and healthy foods bring. Hence, the slogan "chop
          life, it's meant to be chopped"!!
        </p>
        <Link to="/training" className="button mt-3 mb-3 mx-auto">
          Register
        </Link>
      </div>

      <div className="card w-50 mx-auto mt-3 mb-3">
        <img src={ABI} className="card-img-top" alt={AboutBody.jpg} />
        <div className="card-body">
          <p className="card-text">Sarah Tawanyinda Dokong</p>
          <h3 className="typewriter mb-3 mt-3  text-center mx-auto">
            Head Chef
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutBody;
