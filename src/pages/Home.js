import React from "react";

import CategoryBar from "../CategoryBar";

import Flash from "../FlashMessage";
import Footer from "../Footer";
import Hero from "../Hero";

import HomeMenu from "../HomeMenu";

import Services from "../Services";

const Home = () => {
  return (
    <article>
      <Hero />
      <CategoryBar />
      <HomeMenu />
      <Services />
      <Flash />
      <Footer />
    </article>
  );
};

export default Home;
