import React from "react";
import AboutBody from "../AboutBody";

import AboutHero from "../AboutHero";
import Footer from "../Footer";
import Services from "../Services";
import BestDeals from "../BestDeals";
import MenuPrompt from "../MenuPrompt";

const About = () => {
  return (
    <article>
      <AboutHero />
      <Services />
      <AboutBody />
      <BestDeals />
      <MenuPrompt />
      <Footer />
    </article>
  );
};

export default About;
