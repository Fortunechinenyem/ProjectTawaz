import React from "react";
import Flash from "../FlashMessage";
import Footer from "../Footer";
import Welcome from "../Header";
import MainMenu from "../MainMenu";
// import Navbar from "../Navbar";

const Menu = () => {
  return (
    <article>
      {/* <Navbar /> */}
      <Welcome />
      <MainMenu />
      <Footer />
    </article>
  );
};

export default Menu;
