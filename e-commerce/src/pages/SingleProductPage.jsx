import React from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import FoodContainer from '../components/foodcontainer/FoodContainer';
import FruitContainer from '../components/fruitscontainer/FruitContainer';
import Faqs from '../components/faqs/Faqs';


const SingleProductPage = ({ Categoriesdata, cartItems, handleAdd, handleRemove }) => {

  const products = []
  Categoriesdata.forEach((category) => {
    category.products.forEach((product) => {
      products.push(product)
    })
  })
  
  const oneEachProducts = []
  Categoriesdata.forEach((category) => {
    oneEachProducts.push(category.products[2])
  })
  return (
    <>
      <SingleProduct Categoriesdata={Categoriesdata} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove}/>
      <FruitContainer
          title="Kitchen and Fridge Essentials"
          products={oneEachProducts}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          cartItems={cartItems}
        />
      <Faqs />
    </>
  )
}

export default SingleProductPage