import React from "react";
import AboutBody from "../AboutBody";

import AboutHero from "../AboutHero";
import Footer from "../Footer";
import Services from "../Services";

const About = () => {
  return (
    <article>
      <AboutHero />
      <Services />
      <AboutBody />
      <Footer />
    </article>
  );
};

export default About;
