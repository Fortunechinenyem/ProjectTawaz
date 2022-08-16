import React from "react";
import FeaturedList from "../FeaturedList";
import Flash from "../FlashMessage";
import Footer from "../Footer";

import Hero from "../Hero";
import HomeMenu from "../HomeMenu";
import Services from "../Services";

const Home = () => {
  return (
    <article>
      <Hero />
      <FeaturedList />
      <HomeMenu />
      <Services />
      <Flash />
      <Footer />
    </article>
  );
};

export default Home;
