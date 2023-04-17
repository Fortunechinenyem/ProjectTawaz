import React from "react";
import Footer from "../Footer";

import MenuHeader from "../MenuHeader";
import Menucard1 from "../productCart/MenuCard1";
import Menucard2 from "../MenuCard2";
import Menucard3 from "../MenuCard3";
import Menucard4 from "../MenuCard4";
import Menucard5 from "../MenuCard5";
import Menucard6 from "../MenuCard6";
import MenuPrompt from "../MenuPrompt";

const Menu = () => {
  return (
    <section>
      <MenuHeader />
      <div className=" d-flex row g-3 w-75 mx-auto">
        <Menucard1 />
        <Menucard2 />
        <Menucard3 />
        <Menucard4 />
        <Menucard5 />
        <Menucard6 />
      </div>
      <MenuPrompt />
      <Footer />
    </section>
  );
};

export default Menu;
