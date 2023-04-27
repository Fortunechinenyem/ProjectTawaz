import React from "react";

import CategoryBar from "../CategoryBar";

import Footer from "../Footer";
import Hero from "../Hero";

import HomeMenu from "../HomeMenu";

import Testimonials from "../Testimonials";
import HomeInfoCard from "../HomeInfoCard";
import HomeBar from "../HomeBar";
import BestDeals from "../BestDeals";

const Home = () => {
  return (
    <article>
      <Hero />

      <CategoryBar />
      <HomeMenu />
      <HomeInfoCard />

      <HomeBar />
      <Testimonials />
      <BestDeals />
      <Footer />
    </article>
  );
};

export default Home;
