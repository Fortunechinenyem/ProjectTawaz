import React from "react";

import CategoryBar from "../CategoryBar";

import Footer from "../Footer";
import Hero from "../Hero";

import HomeMenu from "../HomeMenu";

import Services from "../Services";
import Testimonials from "../Testimonials";
import HomeInfoCard from "../HomeInfoCard";

const Home = () => {
  return (
    <article>
      <Hero />
      <HomeInfoCard />
      <CategoryBar />
      <HomeMenu />
      <Services />
      <Testimonials />
      <Footer />
    </article>
  );
};

export default Home;
