import React from 'react';
import Hero from '../components/Hero/Hero';
import Categories from "../components/Categories/Categories"
import PopularStalls from "../components/PopularStalls/PopularStalls"
import StartShopping from "../components/StartShopping"
import AutoSlide from "../components/AutoSlide/AutoSlide"


const Home = () => {
  return (
    <main>
      <Hero />
      <div className="App">
        <Categories />
        <PopularStalls />
        <StartShopping />
        <AutoSlide />
      </div>
    </main>
  )
}

export default Home
