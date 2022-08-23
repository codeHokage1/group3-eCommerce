import React from "react";
import Hero from "../components/Hero/Hero";
import FoodContainer from "../components/foodcontainer/FoodContainer";
import FruitContainer from "../components/fruitscontainer/FruitContainer";
import StoreHeading from "../components/storeheading/StoreHeading";
import Categories from "../components/Categories/Categories";
import PopularStalls from "../components/PopularStalls/PopularStalls";
import StartShopping from "../components/StartShopping";
import Autoslide from "../components/Autoslide/Autoslide";
import Footer from "../components/Footer/Footer";
import SearchBarSection from "../components/SearchbarSection/SearchBarSection";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <SearchBarSection /> */}
      <div className="App">
        <Categories />
        <PopularStalls />
        <StartShopping />
        <Autoslide />
        <FoodContainer title="Food items" />
        <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
        <FruitContainer title="Fruits" />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
