import React from 'react'
import Hero from '../components/Hero/Hero'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import FoodContainer from '../components/foodcontainer/FoodContainer'
import FruitContainer from '../components/fruitscontainer/FruitContainer'
import StoreHeading from '../components/storeheading/StoreHeading'
import CategoryFeature from '../components/categoryfeature/CategoryFeature'

const Home = () => {
  return (
    <main>
      <Hero />
      <FoodContainer title="Food items" />
      <StoreHeading />
      <FruitContainer title="Fruits" />
    </main>
  )
}

export default Home
