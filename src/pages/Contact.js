import React from "react";
import ContactBody from "../ContactBody";
import ContactHero from "../Contacthero";
import Footer from "../Footer";
import MenuPrompt from "../MenuPrompt";

const Contact = () => {
  return (
    <article>
      <ContactHero />
      <ContactBody />
      <MenuPrompt />
      <Footer />
    </article>
  );
};

export default Contact;
