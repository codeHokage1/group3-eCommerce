import React from 'react';
import './search.css';

import FoodItem from '../../components/fooditem/FoodItem'
import { Link } from 'react-router-dom';

const SearchPage = ({filteredProducts, search, handleAdd, handleRemove, cartItems}) => {

    
  return (
    <div className='search-body'>
        {
            search ? <h2>All products available based on: <span style={{color: "#ff7e07"}}>{search}</span></h2> : <h2>No searched products</h2>
        }
        {
            search ? (
                filteredProducts.length > 0 ? (
                    <>
                    <div className='filtered-products-container'>
                          {
                              filteredProducts.map(product => (
                                <div style={{border: "1px solid black", borderRadius: "10px"}}>
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
                                </div>
                              ))
                          }
                      </div>
                      <Link to='/products'><button className='search-buttons'>Continue Shopping</button></Link>
                      </>
                  ) : (
                            <div className="no-products-container">
                                <p>This product and products similar are currently out of stock. Kindly check back soon</p>
                                <p>Kindly check our <Link to='/products'>Product Pages</Link> for affordable and quality products. </p>
                            </div>                          
                        )
            ) : (
                    <div className="no-products-container">
                        <p>You have not searched for any product. Kindly use the search box.</p>
                        <p>You can also check our <Link to='/products'>Product Pages</Link> for affordable and quality products. </p>
                    </div>   
                )
        }
        
        
    </div>
  )
}

export default SearchPage