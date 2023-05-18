import React from "react";

import MenuHeader from "../MenuHeader";
import Menucard1 from "../MenuCard1";
import Menucard2 from "../MenuCard2";
import Menucard3 from "../MenuCard3";
import Menucard4 from "../MenuCard4";
import Menucard5 from "../MenuCard5";
import Menucard6 from "../MenuCard6";
import MenuPrompt from "../MenuPrompt";
import MenuBar from "../MenuBar";

const Menu = () => {
  return (
    <section>
      <MenuHeader />
      <div className=" d-flex row g-3 w-75 mx-auto  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);">
        <MenuBar />
        <Menucard1 />
        <Menucard2 />
        <Menucard3 />
        <Menucard4 />
        <Menucard5 />
        <Menucard6 />
      </div>
      <MenuPrompt />
    </section>
  );
};

export default Menu;
