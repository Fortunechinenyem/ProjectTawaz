import React from "react";
import ABI from "./images/aboutimage.jpg";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <section>
      <div className="text-center mt-3">
        <p className="m-4">
          At Tawas Tasty Treats (TTT), we make quality and affordable cakes and
          decorate them beautifully for all kinds of events. We also make
          pastries of all kinds, small chops, finger foods, with or without
          sugar/sweeteners to suit our clients' desires. We make nutritional
          foods and drinks too, including special natural drinks, smoothies,
          yogurt & cake parfaits, and more. Tawas Tasty Treats also offers
          special, premium Northern foods, drinks, snacks, grills, finger foods,
          and other delicacies to add spice to the Northern food lovers in the
          Western part of the country with our special Northern delight
          packages. Our academy trains and mentors students on how to bake
          different pastries and cakes, not just using a recipe, but also how to
          frost and decorate them beautifully. Classes are available for
          beginners who desire to learn catering and its economics. Our delivery
          services are top-notch, as we prioritize prompt and reliable delivery
          to satisfy our clients. We also plan surprises for your loved ones for
          a token. We pamper the taste buds of our target market with all the
          goodness that good and healthy foods bring. Hence, the slogan "Chop
          life, it's meant to be chopped!"
        </p>
        <Link to="/contact" className="button mt-3 mb-3 mx-auto">
          Register
        </Link>
      </div>

      <div className="card w-75 mx-auto mt-5 mb-3 shadow">
        <img src={ABI} className="card-img-top" alt="AboutBody" />
        <div className="card-body text-center">
          <p className="card-text">Sarah Tawanyinda Dokong</p>
          <h3 className="typewriter mb-3 mt-3">Head Chef</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutBody;
