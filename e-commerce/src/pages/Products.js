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
import FoodItem from '../components/fooditem/FoodItem'


const Products = ({Categoriesdata, cartItems, handleAdd, handleRemove, filteredProducts, search}) => {
  return (
    <>
      <h2 style={{textAlign: "center"}}> Available Products based on : {search}</h2>
      <div style={{display: "flex", textAlign: "center", margin: "0 auto", width: "70%"}}>
        {
          filteredProducts.length > 0 && 
            filteredProducts.map(product => (
              <FoodItem
                key={product.id}
                id={product.id}
                discount="-22%"
                img={product.image}
                name={product.name}
                price={product.price}
                discountprice="N820"
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                product={product}
                itemFoundInCart={cartItems.find(item => item.id === product.id)}
              />
            ))
        }
        <hr />
      </div>
      <ProductPageHero />
      <Autoslide />
      {/* <CategoryFeature /> */}
      {/* <FoodContainer title="Food items" /> */}
      <StoreHeading narative="YOUR FAVORITE STORE FOR WHOLESALE MARKET" />
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
