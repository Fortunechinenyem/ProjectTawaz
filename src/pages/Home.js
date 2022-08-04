import React from "react";
import FeaturedList from "../FeaturedList";
import Flash from "../FlashMessage";
import Footer from "../Footer";
import Hero from "../Hero";
import HomeMenu from "../HomeMenu";
//  import Navbar from "../Navbar";

const Home = () => {
    return(
        <article>
            {/* <Navbar />  */}
            <Hero />
            <FeaturedList />
            <HomeMenu />
            <Flash />
            <Footer />
        </article>
    )
}

export default Home;