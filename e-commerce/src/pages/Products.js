import React from 'react'
import LiveStock from '../components/livestock/LiveStock'
import Baking from '../components/baking/Baking'
import FrozenFood from '../components/frozenfood/FrozenFood'
import BeverageSnack from '../components/beveragesnack/BeverageSnack'
import StoreHeading from '../components/storeheading/StoreHeading'
import FoodContainer from '../components/foodcontainer/FoodContainer'
import FruitContainer from '../components/fruitscontainer/FruitContainer'
import Autoslide from '../components/Autoslide/Autoslide'
import ProductPageHero from '../components/ProductPageHero/ProductPageHero'

const Products = () => {
  return (
    <>
      <ProductPageHero />
      <Autoslide />
      <FoodContainer title="Food items" />
      <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
      <FruitContainer title="Fruits" />
      <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
      <LiveStock title="Livestock & Protein" />
      <Baking title="Bakings" />
      <FrozenFood title="Frozen food" />
      <BeverageSnack title="Beverage & snack" />
      <StoreHeading narative="START SHOPPING AT AN AFFORDABLE RATE" />
    </>
  )
}

export default Products
