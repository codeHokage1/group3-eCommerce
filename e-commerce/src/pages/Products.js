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
import CategoryFeature from '../components/categoryfeature/CategoryFeature'


const Products = ({Categoriesdata, cartItems, handleAdd, handleRemove}) => {
  return (
    <>
      <ProductPageHero />
      <Autoslide />
      {/* <CategoryFeature /> */}
      {/* <FoodContainer title="Food items" /> */}
      <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
      {
        Categoriesdata.map(category => <FruitContainer title={category.name} products={category.products} handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} /> )
      }
      {/* <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKEt" />
      <LiveStock title="Livestock & Protein" />
      <Baking title="Bakings" />
      <FrozenFood title="Frozen food" />
      <BeverageSnack title="Beverage & snack" />
      <StoreHeading narative="START SHOPPING AT AN AFFORDABLE RATE" /> */}
    </>
  )
}

export default Products
