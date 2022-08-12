import React from "react";
import Footer from "../Footer";
import MainMenu from "../MainMenu";
import MenuHeader from "../MenuHeader";
import MenuBody from "../Menubody";

const Menu = () => {
  return (
    <article>
      <MenuHeader />
      <MenuBody />
      <MainMenu />
      <Footer />
    </article>
  );
};

export default Menu;
