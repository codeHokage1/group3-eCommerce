import React, {useEffect} from "react";
import Hero from "../components/Hero/Hero";
import FoodContainer from "../components/foodcontainer/FoodContainer";
import FruitContainer from "../components/fruitscontainer/FruitContainer";
import StoreHeading from "../components/storeheading/StoreHeading";
import Categories from "../components/Categories/Categories";
import PopularStalls from "../components/PopularStalls/PopularStalls";
import StartShopping from "../components/StartShopping";
import Autoslide from "../components/Autoslide/Autoslide";

import Footer from "../components/Footer/Footer";

const Home = ({ Categoriesdata, cartItems, handleAdd, handleRemove }) => {
  const products = [];
  Categoriesdata.forEach(category => {
        category.products.forEach(product => {
            products.push(product);
        })
  });
  
  const oneEachProducts = [];
  Categoriesdata.forEach(category => {
      oneEachProducts.push(category.products[0]);
  });
  
  

  const randomProducts = [];
  Categoriesdata.forEach(category => {
    randomProducts.push(category.products[2]);
  });

  return (
    <main>
      <Hero />
      <div className="App">
        <Categories />
        <PopularStalls />
        <StartShopping />
        <Autoslide />
        <FruitContainer title="Food Items and More" products={oneEachProducts} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} />
        <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
        <FruitContainer title="Kitchen & Fridge essentials" products={randomProducts} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
