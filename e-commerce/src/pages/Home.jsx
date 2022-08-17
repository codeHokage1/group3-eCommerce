import React from 'react'
import Hero from '../components/Hero/Hero'
import FoodContainer from '../components/foodcontainer/FoodContainer'
import FruitContainer from '../components/fruitscontainer/FruitContainer'
import StoreHeading from '../components/storeheading/StoreHeading'
import Categories from '../components/Categories/Categories'
import PopularStalls from '../components/PopularStalls/PopularStalls'
import StartShopping from '../components/StartShopping'
import AutoSlide from '../components/AutoSlide/AutoSlide';

import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="App">
        <Categories />
        <PopularStalls />
        <StartShopping />
        <AutoSlide />
        <FoodContainer title="Food items" />
        <StoreHeading />
        <FruitContainer title="Fruits" />
        <Footer />
      </div>
    </main>
  )
}

export default Home
