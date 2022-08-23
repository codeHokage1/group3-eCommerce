import React from 'react';
import './singleproduct.css'
import { TbShoppingCart as CartLogo } from "react-icons/tb";

import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import mainPic from '../../images/mainBeef.png';
import other1 from '../../images/beef1.png';
import other2 from '../../images/beef2.png';
import other3 from '../../images/beef3.png';

const SingleProduct = ({Categoriesdata}) => {
    const { id } = useParams();
    const products = [];
    Categoriesdata.forEach(category => {
        category.products.forEach(product => {
            products.push(product)
        })
    });

    const findProduct = products.find(product => String(product.id) === id);

    // console.log(products)
  return (
    <main>
        <section className='single-product'>
            <span>FOOD {'>'} BEEF {'>'}</span>
            <section className='product-details'>
                <div className='left-images'>
                    <div className='main-image'>
                        <img src={findProduct.image} alt="" />
                    </div>
                    <div className='other-images'>
                        <div className='image-container'>
                            <img src={other1} alt="" />
                        </div>
                        <div className='image-container'>
                            <img src={other2} alt="" />
                      </div>
                      <div className='image-container'>
                            <img src={other3} alt="" />
                        </div>
                    </div>
                </div>
                <div className='right-details'>
                    <h1>{findProduct.name}</h1> 
                    <span>Available in different sizes and slices</span>             
                    <div className='price'>
                        <button>N<span className='price-amount'>{findProduct.price}</span></button>
                        <p><span style= {{color: 'green', fontWeight: 'bolder'}}>Save 12%</span><br />Inclusive of all Taxes</p>
                    </div>
                    
                    <h5 className='product-desc' style={{textDecoration: 'underline'}}>Product Description</h5>
                    <p className='product-desc-details'>
                        {findProduct.description}
                    </p>
                    <div className='quantity-addCart'>
                        <div className='quantity'>
                            <p className='quantity-text'>QTY</p>
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="" selected>4</option>
                            </select> 
                        </div> 
                        <button> Add to Cart <CartLogo /> </button>            
                    </div>
                    <div className='rating-details'>
                        <div>
                            <Badge bg="secondary" className='badge-number'> 4.5 / 5 </Badge>
                            <h6>Farhan Ayomide</h6>
                            <p>
                                Legit! I ordered goat meat and fish, they sliced it just the 
                                way I wanted. The delivery is also fast. I could literally 
                                track my order on my phone.
                            </p>
                        </div>
                    </div>        
                </div>
            </section>
          </section>
          <div className='other-products'>
                SEE OTHER SIMILAR PRODUCTS   
        </div>
    </main>
  )
}

export default SingleProduct