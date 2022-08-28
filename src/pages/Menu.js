import React from "react";
import Footer from "../Footer";
import Assemble from "../productCart/Assemble";
import Kart from "../productCart/Kart";
import { CartProvider } from "react-use-cart";

import MenuHeader from "../MenuHeader";

const Menu = () => {
  return (
    <section>
      <MenuHeader />
      <CartProvider>
        <Assemble />
        <Kart />
      </CartProvider>
      <Footer />
    </section>
  );
};

export default Menu;
